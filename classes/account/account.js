'use strict';
const config = require('config');
const Connection = require('../connect/connect');


class Account extends Connection {
  constructor() {
    super();
    this.account = this.web3.eth.accounts.wallet.add(config.privateKey);
    this.address = this.web3.eth.accounts.wallet['0'].address;
  }



}

module.exports = new Account();
