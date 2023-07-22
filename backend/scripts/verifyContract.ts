import { ethers, run } from "hardhat";
require("dotenv").config();

async function main() {
    const contractAddress = process.env.CONTRACT_ADDRESS;
    setTimeout(async() => {
        await run("verify:verify", {
          address: contractAddress,
        });
    }, 30000);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});