// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ContractB {
    uint256 public btcPrice;
    function fetch(uint256 btc) public{
        btcPrice = btc;
    }
    function provide() view public returns(uint){
        return btcPrice;
    }
}