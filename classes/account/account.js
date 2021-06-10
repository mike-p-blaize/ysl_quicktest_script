'use strict';

const Connection = require('../connect/connect');

class Account extends Connection {
  constructor(privateKey) {
    super();
    if (privateKey !== undefined) {
      this.entity = this.web3.eth.accounts.privateKeyToAccount(privateKey);
    }
    this.entity = this.web3.eth.accounts.create();
  }



}

module.exports = Account;
