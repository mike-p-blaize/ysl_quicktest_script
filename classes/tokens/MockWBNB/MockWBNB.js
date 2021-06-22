const config = require('config');
const ABI = require('../../../utils/abi/MockWBNB.json')
const account = require('../../account/account');

class MockWBNB {
    constructor() {
    //this.config = { ...config.chain[chain], privateKey: config.privateKey };
    this.account = account;
    this.connection = account.web3;
    this.contract = new this.connection.eth.Contract(
        ABI,
        config.contracts.tokens.MockWBNB
    );
}

    async mint(amount){
        await this.contract.methods
            .mint(amount)
            .send({
                from: this.account.address,
                gas: config.transaction.gasLimit,
                gasPrice: Math.round(
                    config.transaction.gasPriceMultiplier *
                    (await this.connection.eth.getGasPrice())
                ),
            });
    }
    async approve(amount){
        await this.contract.methods
            .approve(config.contracts.TimeSet,amount)
            .send({
                from: this.account.address,
                gas: config.transaction.gasLimit,
                gasPrice: Math.round(
                    config.transaction.gasPriceMultiplier *
                    (await this.connection.eth.getGasPrice())
                ),
            });
    }
}

module.exports = new MockWBNB();