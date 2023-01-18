// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./ContractB.sol";

contract MainC{

    ContractB public _contractB;

    constructor(address _addB){
        _contractB = ContractB(_addB);
    }

    function dataPriceBTC() view public returns(string memory){
        string memory priceBTC = _contractB.provideBTC();
        return priceBTC;
    }
    function dataPriceETH() view public returns(string memory){
        string memory priceETH = _contractB.provideETH();
        return priceETH;
    }
    function dataPriceSOL() view public returns(string memory){
        string memory priceSOL = _contractB.provideSOL();
        return priceSOL;
    }
    function dataPriceAVAX() view public returns(string memory){
        string memory priceAVAX = _contractB.provideAVAX();
        return priceAVAX;
    }
    function dataPriceKLAY() view public returns(string memory){
        string memory priceKLAY = _contractB.provideKLAY();
        return priceKLAY;
    }
    function dataPriceMATIC() view public returns(string memory){
        string memory priceMATIC = _contractB.provideMATIC();
        return priceMATIC;
    }
}