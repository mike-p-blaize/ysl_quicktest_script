const Acc = require('../classes/account/account');
const MockBUSD = require('../classes/tokens/MockBUSD/MockBUSD');
const MockWBNB = require('../classes/tokens/MockWBNB/MockWBNB');
const TimeSet = require('../classes/TimeSet/TimeSet');
const{getRandomArbitrary} = require('../utils')

c


async function mintAndApproveSession() {
    // await busd.mint('1000000000000000000000000');
    // await wbnb.mint('1000000000000000000000000');
    await MockBUSD.approve('1000000000000000000000000');
    await wbnb.approve('1000000000000000000000000');
    console.log('Mint n approve done!');
}

async function depositSession(token,min,max){
    for (let i=0;i<10;i++){
        const amount  = getRandomArbitrary(min,max)
        console.log(amount);

        await timeSet.deposit(amount,token);

    }
}

//async function timestampUpdate

async function start(){
    //await mintAndApproveSession();
    await depositSession(0,5000,6000);
    await depositSession(1,20,30);
    console.log('Deposit done!');
}

start().then(()=>{
        console.log('End.')
    })
    .catch( err =>{
    console.log(err.message)
});


