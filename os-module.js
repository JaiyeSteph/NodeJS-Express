const os = require('os')

// infor about current user 

const user = os.userInfo()
console.log(user)


// method return ssystem uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)
