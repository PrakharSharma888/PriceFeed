const main = async() => {
    const axios = require("axios");

    const BTCurl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';

    // Make the API call using axios
    axios.get(BTCurl)
    .then(response => {
    // Extract the price from the API response
    const price = response.data.USD;
    console.log(`The current price of Bitcoin is $${price}`);
    })
}
main()