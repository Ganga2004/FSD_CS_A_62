const { error } = require("console");
const fs = require("fs");
fs.readFile("./dummy.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);

})
function myWriteFileAsync(data)
{
    fs.writeFileSync("./dummy.txt",data,(err)=>
    {
        console.log("file writing error ",error.message)
    })
    
}