const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0xD5dCDC27E00F82D7656d8F0B4110a8Ebc41C77a6";
  const [deployer] = await ethers.getSigners();

  const VideoNFT = await ethers.getContractAt("VideoNFT", contractAddress);

  const recipient = deployer.address;
  const metadataURI = "ipfs://bafybeiciwynoby7poofllw3oqo6usanwsi4okitrlpbig3aylnqjvsmb24";

  const tx = await VideoNFT.mintVideoNFT(recipient, metadataURI);
  console.log("⏳ Minting...");
  await tx.wait();

  console.log(`✅ Minted to: ${recipient}`);
  console.log(`📦 Metadata URI: ${metadataURI}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
