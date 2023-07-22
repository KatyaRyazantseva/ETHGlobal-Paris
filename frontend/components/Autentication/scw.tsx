import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import SocialLogin from "@biconomy/web3-auth";
import { ChainId } from "@biconomy/core-types";
import { ethers } from "ethers";
import {
  BiconomySmartAccount,
  BiconomySmartAccountConfig,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import { Button, Stack, Typography } from "@mui/material";
import { IBundler, Bundler } from "@biconomy/bundler";
import { IPaymaster, BiconomyPaymaster } from "@biconomy/paymaster";

const bundler: IBundler = new Bundler({
  bundlerUrl: "https://bundler.biconomy.io/api/v2/80001/abc", // you can get this value from biconomy dashboard.
  chainId: ChainId.POLYGON_MUMBAI, //
  entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
});

const paymaster: IPaymaster = new BiconomyPaymaster({
  paymasterUrl: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_URL || "",
});

const Home = () => {
  const [smartAccount, setSmartAccount] = useState<any>(null);
  const [interval, enableInterval] = useState(false);
  const sdkRef = useRef<SocialLogin | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [provider, setProvider] = useState<any>(null);
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    let configureLogin: any;
    if (interval) {
      configureLogin = setInterval(() => {
        if (!!sdkRef.current?.provider) {
          setupSmartAccount();
          clearInterval(configureLogin);
        }
      }, 1000);
    }
  }, [interval]);

  async function login() {
    if (!sdkRef.current) {
      const socialLoginSDK = new SocialLogin();
      const signature1 = await socialLoginSDK.whitelistUrl(
        "http://localhost:3000/"
      );
      await socialLoginSDK.init({
        chainId: ethers.utils.hexValue(ChainId.POLYGON_MUMBAI).toString(),
        network: "testnet",
        whitelistUrls: {
          "http://localhost:3000/": signature1,
        },
      });
      sdkRef.current = socialLoginSDK;
    }
    if (!sdkRef.current.provider) {
      sdkRef.current.showWallet();
      enableInterval(true);
    } else {
      setupSmartAccount();
    }
  }

  async function setupSmartAccount() {
    if (!sdkRef?.current?.provider) return;
    sdkRef.current.hideWallet();
    setLoading(true);
    const web3Provider = new ethers.providers.Web3Provider(
      sdkRef.current.provider
    );
    setProvider(web3Provider);

    try {
      const biconomySmartAccountConfig: BiconomySmartAccountConfig = {
        signer: web3Provider.getSigner(),
        chainId: ChainId.POLYGON_MUMBAI, //
        bundler: bundler,
        paymaster: paymaster,
      };
      let biconomySmartAccount = new BiconomySmartAccount(
        biconomySmartAccountConfig
      );
      biconomySmartAccount = await biconomySmartAccount.init();
      setAddress(await biconomySmartAccount.getSmartAccountAddress());
      console.log(
        "address",
        await biconomySmartAccount.getSmartAccountAddress()
      );

      setSmartAccount(biconomySmartAccount);
      setLoading(false);
    } catch (err) {
      console.log("error setting up smart account... ", err);
    }
  }

  const logout = async () => {
    if (!sdkRef.current) {
      console.error("Web3Modal not initialized.");
      return;
    }
    await sdkRef.current.logout();
    sdkRef.current.hideWallet();
    setSmartAccount(null);
    setAddress("");
    enableInterval(false);
  };

  return (
    <Stack direction="column" alignItems="center">
      <Button onClick={!provider ? login : logout}>
        {!provider ? "Connect Wallet" : "Disconnect Wallet"}
      </Button>

      {loading && <h2>Loading Smart Account...</h2>}

      {address && (
        <div>
          <Typography sx={{ fontSize: "15px" }}>
            {" "}
            Your new address: {address}
          </Typography>
        </div>
      )}
    </Stack>
  );
};

export default Home;
