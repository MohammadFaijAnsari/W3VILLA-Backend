
const EventEmitter=require('events');
const emitter=new EventEmitter();
emitter.on('greet',(...a)=>{
    console.log(`Greet Funcation Called= ${a}`)
})
emitter.emit('greet',1,2,3,4);