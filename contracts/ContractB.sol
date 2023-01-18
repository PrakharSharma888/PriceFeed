// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ContractB {
    string public btcPrice;
    function fetch(string memory btc) public{
        btcPrice = btc;
    }
    function provide() view public returns(string memory){
        return btcPrice;
    }
}