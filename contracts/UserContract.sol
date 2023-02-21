// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "./CryptoOracle.sol";

contract Contract2 {
    CryptoPriceFeedOracle c1;
    bool payment;


    constructor(address _c1) public {
        c1 = CryptoPriceFeedOracle(_c1);
    }

    string public symbol_crypto;
    address public sender_address;
    int public _id;

    function requestAirData(string memory _symbol_crypto, address payable _sender_address) public payable returns (string memory, address, int, bool){
        (bool success) = c1.payForCrytoData{value:msg.value}();

        symbol_crypto = _symbol_crypto;
        sender_address = _sender_address;
        (string memory symb, address sender, int id) = c1.add(_symbol_crypto, _sender_address);
         _id = c1.id();
        return (symb,sender,id,success);
    }

    function getData() public view returns(string memory, address, int){
        return(symbol_crypto,sender_address, _id);
    }

    function retreiveData(uint id) public view returns(string memory){
        return c1.getCrytoData(id);
    }
}