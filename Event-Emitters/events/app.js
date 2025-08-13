
const EventEmitter=require('event');
const emitter=new EventEmitter();

// greet();
emitter.on('greet',()=>{
    console.log("Vinod ")
})
emitter.emit('greet');