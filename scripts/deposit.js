const TimeSet = require('../classes/TimeSet/TimeSet');
const{getRandomArbitrary} = require('../utils')

async function depositSession(token,min,max){
    for (let i=0;i<10;i++){
        const amount  = getRandomArbitrary(min,max)
        await TimeSet.deposit(amount,token);

    }
}
async function start(){
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


