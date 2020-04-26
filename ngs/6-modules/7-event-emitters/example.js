const EventEmitter = require('events');
const myEMitter = new EventEmitter();
// console.log(myEMitter);
// Streams are Event Emitters
// process.stdin, process.stdout
setImmediate(() => { myEMitter.emit('Test'); });

myEMitter.on('Test', () => {
    console.log('Test emitted');
});
myEMitter.on('Test', () => {
    console.log('Test emitted');
});
myEMitter.on('Test', () => {
    console.log('Test emitted');
});

console.log(myEMitter);