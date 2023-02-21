const { Contract, ethers } = require('ethers');
const axios = require('axios');
const {CryptoOracle_ABI,CrytpUserContract_ABI} = require("../constraints/abi")

async function getStockData(){
    const userContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    const oracleContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner()
    const userContract = new Contract(userContractAddress, CrytpUserContract_ABI, signer)
    const oracleContract = new Contract(oracleContractAddress, CryptoOracle_ABI, signer)
   
    const xyz = await userContract.requestAirData("ETH","0x2546BcD3c84621e976D8185a91A922aE77ECEc30",{value:ethers.utils.parseEther("2"), gasLimit : 300000})
    const data = await userContract.getData()

    const Symbol = data[0]
    const address_of_sender = data[1]
    const id = data[2]

    const transactionResponse = await oracleContract.add(Symbol,address_of_sender)
    const transactionReceipt = await transactionResponse.wait()
    console.log("Name of stock :",transactionReceipt.events[0].args.symbol)
    console.log("Sender address input :",transactionReceipt.events[0].args.sender)
  
    try {
          Name = transactionReceipt.events[0].args.symbol;
          //const apiKey = 'uVkr9z1EwjmDoCJyI1XjeKFBo8KF5B1m';
          const CryptoAPI = `https://min-api.cryptocompare.com/data/price?fsym=${Name}&tsyms=USD`
          const response = await axios.get(CryptoAPI);
          const CryptoData = response.data.USD
          console.log(CryptoData);

          price_ = CryptoData.toString();
          
          const updateData = await oracleContract.storeCryptoData(price_, id)
          const finalData = await oracleContract.getCrytoData(id)
          console.log(finalData)

        //retreving back in user's contract
        const getdata = await userContract.retreiveData(id)
        console.log(getdata);
  
    } catch (e) {
      console.error(e);
  }
  }
  
  getStockData().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });