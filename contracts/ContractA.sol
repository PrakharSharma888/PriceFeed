// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./ContractB.sol";

contract MainC{

    ContractB public _contractB;

    constructor(address _addB){
        _contractB = ContractB(_addB);
    }

    function dataPrice() view public returns(uint){
        uint256 price = _contractB.provide();
        return price;
    }
}