import { ethers, run } from "hardhat";
require("dotenv").config();



async function main() {
  const ERC20TokenAddress = process.env.ERC20_CONTRACT_ADDRESS;
  const [deployer] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory("DAOdemic");
  const contract = await contractFactory.deploy(ERC20TokenAddress!);
  const contractAddress = await contract.getAddress();
  console.log(`The contract was deployed at address ${contractAddress}`);
  console.log(`Verifying the contract...`);
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
