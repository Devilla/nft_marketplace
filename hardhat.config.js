require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

task("deploy", "Deploy the smart contracts", async(taskArgs, hre) => {

  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed();
})

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    dev: {
      url: "http://localhost:8545",
      accounts: [
        process.env.PRIVATE_KEY
      ]
    }
  }
};