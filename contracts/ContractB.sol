// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ContractB {
    string public btcPrice;
    string public ethPrice;
    string public solPrice;
    string public avaxPrice;
    string public klayPrice;
    string public maticPrice;

    function fetchBTC(string memory btc) public{
        btcPrice = btc;
    }
    function fetchETH(string memory eth) public{
        ethPrice = eth;
    }
    function fetchSOL(string memory sol) public{
        solPrice = sol;
    }
    function fetchAVAX(string memory avax) public{
        avaxPrice = avax;
    }
    function fetchKLAY(string memory klay) public{
        klayPrice = klay;
    }
    function fetchMATIC(string memory matic) public{
        maticPrice = matic;
    }



    function provideBTC() view public returns(string memory){
        return btcPrice;
    }
    function provideETH() view public returns(string memory){
        return ethPrice;
    }
    function provideSOL() view public returns(string memory){
        return solPrice;
    }
    function provideAVAX() view public returns(string memory){
        return avaxPrice;
    }
    function provideKLAY() view public returns(string memory){
        return klayPrice;
    }
    function provideMATIC() view public returns(string memory){
        return maticPrice;
    }
}