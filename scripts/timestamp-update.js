const config = require('config');
const TimeSet = require('../classes/TimeSet/TimeSet');

async function timestampUpdate() {
    await TimeSet.setDiscoveryStart(config.stages[process.argv[2]])
    console.log('Set timestamp done!');
    const currentStage = await TimeSet.getCurrentStage();
    console.log('Current stage is ', currentStage);
}

async function start(){
    await timestampUpdate();
}

start().then(()=>{
        console.log('End.')
    })
    .catch( err =>{
    console.log(err.message)
});


