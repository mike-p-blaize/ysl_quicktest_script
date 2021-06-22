const web3 = require('web3').utils;

function getRandomArbitrary(min, max) {
    const num = Math.round(Math.random() * (max - min) + min);
    const toreturn = web3.toBN(num).mul(web3.toBN('1000000000000000000'));
    return toreturn.toString(10);
}

module.exports = {
    getRandomArbitrary
}