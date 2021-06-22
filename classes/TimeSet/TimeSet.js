const config = require('config');
const ABI = require('../../utils/abi/TimeSet.json')
const account = require('../account/account');

class TimeSet {
    constructor() {
        this.account = account;
        this.connection = account.web3;
        this.contract = new this.connection.eth.Contract(
            ABI,
            config.contracts.TimeSet
        );
    }

    async deposit(amount,token){
        console.log(config.zeroAddress);
        await this.contract.methods
            .deposit(amount,token,config.signature,config.zeroAddress)
            .send({
                from: this.account.address,
                gas: config.transaction.gasLimit,
                gasPrice: Math.round(
                    config.transaction.gasPriceMultiplier *
                    (await this.connection.eth.getGasPrice())
                ),
            });
    }
    async setDiscoveryStart(timestamp){
        await this.contract.methods
            .setDiscoveryStart(timestamp)
            .send({
                from: this.account.address,
                gas: config.transaction.gasLimit,
                gasPrice: Math.round(
                    config.transaction.gasPriceMultiplier *
                    (await this.connection.eth.getGasPrice())
                ),
            });
    }
    async getCurrentStage(){
        return this.contract.methods
            .getCurrentStage().call();
    }
}

module.exports = new TimeSet();
