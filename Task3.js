const fs = require ('fs')

fs.writeFile("welcome.txt","Hello Node",err=>{
err?console.log(err):console.log('you did it')
})


fs.readFile("welcome.txt",(err,file)=>{
    err?console.log(err):console.log('file')
    })