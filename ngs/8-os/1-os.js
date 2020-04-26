const os = require('os');

console.log('OS platform:', os.platform());

console.log('OS freemem:', os.freemem());

console.log('OS totalmem:', os.totalmem());

console.log('OS release:', os.release());
console.log('OS uptime:', os.uptime() / (60 * 60));
console.log('OS type:', os.type());

console.log('OS CPU architecture:', os.arch());

console.log('# of logical CPU cores', os.cpus().length);

console.log('Home directory for current user', os.homedir());

console.log('line 1' + os.EOL + 'line 2' + os.EOL + 'line 3');
