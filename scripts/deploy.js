const hre = require("hardhat");

async function main() {
  const VideoNFT = await hre.ethers.getContractFactory("VideoNFT");
  const videoNFT = await VideoNFT.deploy();

  await videoNFT.waitForDeployment();

  console.log("✅ VideoNFT deployed to:", videoNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
