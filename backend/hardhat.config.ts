import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{version: "0.8.9"}, {version: "0.8.17"}, {version: "0.8.19"}],
  },
  networks: {
    lineatestnet: {
      url: `https://linea-goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts:
        process.env.METAMASK_PRIVATE_KEY !== undefined ? [process.env.METAMASK_PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      lineatestnet: process.env.ETHERSCAN_API_KEY!
    },
    customChains: [
      {
        network: "lineatestnet",
        chainId: 	59140,
        urls: {
          apiURL: "https://api-testnet.lineascan.build/api",
          browserURL: "https://goerli.lineascan.build/"
        }
      }
    ]
  },
};

export default config;
