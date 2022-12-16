/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    development: {
      url: `https://127.0.0.1:8545`,
      accounts: ['0x7e4d587c185a74ad84ad83ade436ad5aa5b86ceffc6e3d1af1b04a659b2c26a8']
    }
  }
};
