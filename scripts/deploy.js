const hre = require("hardhat");
const CoinGecko = require('coingecko-api');

async function main() {
    const axios = require("axios");

    const BTCurl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';
    const ETHCurl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
    const SOLCurl = 'https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD';
    const AVAXCurl = 'https://min-api.cryptocompare.com/data/price?fsym=AVAX&tsyms=USD';
    const KLAYCurl = 'https://min-api.cryptocompare.com/data/price?fsym=KLAY&tsyms=USD';
    const MATICCurl = 'https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD';

    const responseBT = await axios.get(BTCurl)
    const responseETH = await axios.get(ETHCurl)
    const responseSOL = await axios.get(SOLCurl)
    const responseAVAX = await axios.get(AVAXCurl)
    const responseKLAY = await axios.get(KLAYCurl)
    const responseMATIC = await axios.get(MATICCurl)
    
    const bitPrice = responseBT.data.USD.toString()
    const ethPrice = responseETH.data.USD.toString()
    const solPrice = responseSOL.data.USD.toString()
    const avaxPrice = responseAVAX.data.USD.toString()
    const klayPrice = responseKLAY.data.USD.toString()
    const maticPrice = responseMATIC.data.USD.toString()


  const feed = await hre.ethers.getContractFactory("ContractB");
  const _feed = await feed.deploy();

  await _feed.deployed();

  console.log("Address :",_feed.address);
  await _feed.fetchBTC(bitPrice)
  await _feed.fetchETH(ethPrice)
  await _feed.fetchSOL(solPrice)
  await _feed.fetchAVAX(avaxPrice)
  await _feed.fetchKLAY(klayPrice)
  await _feed.fetchMATIC(maticPrice)

  const btcData = await hre.ethers.getContractFactory("MainC");
  const _btcData = await btcData.deploy(_feed.address)

  await _btcData.deployed();
  console.log("ContractA ",_btcData.address)

  console.log(await _btcData.dataPriceBTC())
  console.log(await _btcData.dataPriceETH())
  console.log(await _btcData.dataPriceSOL())
  console.log(await _btcData.dataPriceAVAX())
  console.log(await _btcData.dataPriceKLAY())
  console.log(await _btcData.dataPriceMATIC())

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 9240