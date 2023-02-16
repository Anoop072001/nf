import { ethers } from "hardhat";

async function main() {

  const AuthNFT = await ethers.getContractFactory("AuthNFT");
  const authNFT = await AuthNFT.deploy("TEST", "");

  await authNFT.deployed();

  const AuthNFTFactory = await ethers.getContractFactory("AuthNFTFactory");
  const authNFTFactory = await AuthNFTFactory.deploy();

  await authNFTFactory.deployed();

  console.log(`AuthNFT deployed to ${authNFT.address}`);
  console.log(`AuthNFTFactory deployed to ${authNFTFactory.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
