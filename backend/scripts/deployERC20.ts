import { ethers, run } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory("HerNFT");
  const contract = await contractFactory.deploy();
  const contractAddress = await contract.getAddress();
  console.log(`The contract was deployed at address ${contractAddress}`);
  console.log(`Verifying the contract...`);
  setTimeout(async () => {
    await run("verify:verify", {
      address: contractAddress,
    });
  }, 30000);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
