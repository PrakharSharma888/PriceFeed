// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CryptoPriceFeedOracle is Ownable{

    struct CryptoStruct{
        string _price;
    }

    mapping(uint => CryptoStruct) public data;
    address public payer;

    struct symbolofCrypto{
        string symbol;
        address sender;
    }

    int public id = -1;
    event CrytoUpdated(string symbol, address sender, int id);

     modifier onlyPayer{
        require(tx.origin == payer, "Not the payer broooo");
        _;
    }

    symbolofCrypto[] public people;

    function add(string memory symbol, address payable sender) public onlyPayer returns (string memory,address,int){
        people.push(symbolofCrypto({symbol : symbol,sender : sender}));
        id++;
        emit CrytoUpdated(symbol,sender,id);
        return (symbol,sender,id);
    }

    function payForCrytoData() public payable returns(bool){
        require(msg.value >= 1 ether, "Payment must be at least 1 ether");
        payer = payable(tx.origin);
        return true;
    }

     function storeCryptoData(string memory price, uint _id) onlyOwner public {
        data[_id] = CryptoStruct(price);
    }

    function getCrytoData(uint _id) public view onlyPayer returns (string memory){
        return( data[_id]._price);
    }
    
}
