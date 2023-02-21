const hre = require("hardhat");
const axios = require('axios');

async function main() {

  const CryptoOracle = await hre.ethers.getContractFactory("CryptoPriceFeedOracle");
  const _CryptoOracle = await CryptoOracle.deploy();

  await _CryptoOracle.deployed();

  console.log(
    "CryptoOracle_Address :", _CryptoOracle.address
  );

  const UserContract = await hre.ethers.getContractFactory("Contract2");
  const _UserContract = await UserContract.deploy(_CryptoOracle.address);

  await _UserContract.deployed();

  console.log(
    "UserContract_Address :", _UserContract.address
  );
}
main()