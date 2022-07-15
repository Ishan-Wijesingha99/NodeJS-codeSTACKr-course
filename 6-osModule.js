
// the built-in os module
// os means operating system, so we're going to get info about our operating system
const os = require('os');

// console.log(os);



// info about current user
const user = os.userInfo();
console.log(user)



// returning the system uptime
// the uptime is the number of seconds that a device has been operational for
const systemUptime = os.uptime();
console.log(systemUptime);



// some other properties of the os module
const currentOS = {
    name: os.type(), // name of operating system, which is 'Windows_NT'
    release: os.release(), // gives release version
    totalMemory: os.totalmem(), // returns the total memory of the device in bytes
    freeMemory: os.freemem() // returns the total free memory in bytes
}

console.log(currentOS);





