const MockBUSD = require('../classes/tokens/MockBUSD/MockBUSD');
const MockWBNB = require('../classes/tokens/MockWBNB/MockWBNB');
const{getRandomArbitrary} = require('../utils')


async function mintSession() {
    await MockBUSD.mint('1000000000000000000000000');
    await MockWBNB.mint('1000000000000000000000000');
    console.log('Mint n approve done!');
}

async function start(){
    await mintSession();
    console.log('Mint done!');
}

start().then(()=>{
        console.log('End.')
    })
    .catch( err =>{
    console.log(err.message)
});


