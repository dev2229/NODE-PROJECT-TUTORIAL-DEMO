const os = require('os')

// INFORMATION ABOUT USER
const user = os.userInfo()
console.log(user)

// METHOD RETURN THE SYSTE UPTIME
console.log(`THE SYSTEM UPTIME IS ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()
}

console.log(currentOS)