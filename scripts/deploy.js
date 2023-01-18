const hre = require("hardhat");
const { BigNumber } = require('ethers')
const CoinGecko = require('coingecko-api');

async function main() {
    const axios = require("axios");

    const BTCurl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';


    const response = await axios.get(BTCurl)
    
    const bitPrice = response.data.USD
    const bitPrice1 = BigNumber.from(bitPrice)

  const feed = await hre.ethers.getContractFactory("ContractB");
  const _feed = await feed.deploy();

  await _feed.deployed();

  console.log("Address :",_feed.address);
    console.log("Price: ",bitPrice1)
  await _feed.fetch(bitPrice1)

  const btcData = await hre.ethers.getContractFactory("MainC");
  const _btcData = await btcData.deploy(_feed.address)

  await _btcData.deployed();

  console.log(await _btcData.dataPrice())

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
