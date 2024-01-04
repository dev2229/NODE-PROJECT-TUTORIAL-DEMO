const { Console } = require('console')
const {readFileSync , writeFileSync} = require('fs')


console.log("START")
const first = readFileSync('./BIMpathcontent/FIRSTfs.txt','utf-8')
const second  = readFileSync('./BIMpathcontent/SECONDfs.txt','utf-8')

console.log(first , second)

writeFileSync(
    './BIMpathcontent/PATHresult.txt',
    `HERE IS THE RESULT : ${first} , ${second}`,
    {flag : 'a'}
)
console.log("DONE WITH THIS TASK")
console.log("STARTING NEW TASK")