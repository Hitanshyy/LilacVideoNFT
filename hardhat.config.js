require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    coretestnet: {
      url: process.env.CORE_TESTNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1115, // Core Testnet chain ID
    },
  },
};
