const config = require('config');
const Web3 = require('web3');

class Connection {
  constructor() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider(config.httpProvider)
    );
  }
}

module.exports = Connection;
