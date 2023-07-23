import React from "react";
import { Button, FormControl, Stack, TextField, useTheme } from "@mui/material";
import router from "next/router";
import { ethers } from "ethers";
import { create } from "zustand";

const CONTRACT_ADDRESS = "0x2D7cCb440dDD2DdA13DB1FeCdDaf35e1Aad2DEE4";
const ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const RPC_URL =
  "https://linea-goerli.infura.io/v3/1ae95434611847faa61b88d87314076b";
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATEKEY;

export const executeTransaction = async (address: string) => {
  const recipientAddress = address;
  console.log("exec trx", address);
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);
  const amountInWei = ethers.utils.parseUnits((1).toString(), 6);

  const nonce = await wallet.getTransactionCount();
  const gasPrice = await provider.getGasPrice();
  const gasLimit = await contract.estimateGas.mint(
    recipientAddress,
    amountInWei
  );

  const transaction = {
    to: CONTRACT_ADDRESS,
    nonce,
    gasPrice,
    gasLimit,
    data: contract.interface.encodeFunctionData("mint", [
      recipientAddress,
      amountInWei,
    ]),
  };

  const transactionResponse = await wallet.sendTransaction(transaction);
  const transactionReceipt = await transactionResponse.wait();
  console.log(transactionReceipt);

  return transactionReceipt;
};

function MissionForm() {
  const theme = useTheme();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Here is where the smartwallet goes..
    executeTransaction("");
    const target = e.target as HTMLFormElement;
    e.preventDefault();
    try {
      const response = await fetch("/api/Contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: e.currentTarget.fullname.value,
          email: e.currentTarget.email.value,
          message: e.currentTarget.message.value,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Stack
          sx={{
            width: "60%",
            mb: "3rem",
            [theme.breakpoints.down("md")]: { width: "90%" },
          }}
        >
          <TextField
            id="fullname"
            name="fullname"
            label="Name:"
            variant="outlined"
            required
            margin="dense"
            sx={{ backgroundColor: "#beb0b05c" }}
          >
            Name
          </TextField>
          <TextField
            id="email"
            name="email"
            label="E-mail:"
            variant="outlined"
            required
            margin="dense"
            sx={{ backgroundColor: "#beb0b05c", color: "white" }}
          >
            Name
          </TextField>
          <TextField
            id="githubusername"
            name="githubusername"
            label="GitHub Username:"
            variant="outlined"
            required
            margin="dense"
            sx={{ backgroundColor: "#beb0b05c" }}
          >
            Name
          </TextField>
          <TextField
            id="githubrepolink"
            name="githubrepolink"
            label="GitHub Repo Link:"
            variant="outlined"
            required
            margin="dense"
            sx={{ backgroundColor: "#beb0b05c" }}
          >
            Name
          </TextField>
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <Button
              sx={{
                width: "100%",
                mt: "2rem",
                color: "#E5e1f9",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </Stack>
      </Stack>
    </form>
  );
}

export default MissionForm;
