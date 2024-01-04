const {readFile , writeFile} = require('fs')


console.log("START")
console.log("STARTING WITH FIRST TASK")
readFile('./BIMpathcontent/FIRSTfs.txt','utf-8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return ;
    }

    const first = result;
    readFile('./BIMpathcontent/SECONDfs.txt','utf-8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return ;
        }

        const second = result;
        writeFile(
            './BIMpathcontent/BIMpathasync.txt',
            `HERE IS THE RESULT : ${first} , ${second}`,
            (err,result)=>{
                if (err){
                    console.log(err)
                    return ;
                }
                console.log("DONE WITH FIRST TASK")
            }
        )

    })
})
console.log("STARTING WITH SECOND TASK")