const path = require('path')
console.log(path.sep)

const filepath = path.join('BIMpathcontent','BIMsubfolder','pathtest.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'BIMpathcontent','BIMsubfolder','pathtest.txt')
console.log(absolute)