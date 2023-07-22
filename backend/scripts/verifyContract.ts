import { ethers, run } from "hardhat";
require("dotenv").config();

async function main() {
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const ERC20TokenAddress = process.env.ERC20_CONTRACT_ADDRESS;
    setTimeout(async() => {
        await run("verify:verify", {
          address: contractAddress,
          constructorArguments: [ERC20TokenAddress]
        });
    }, 30000);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});