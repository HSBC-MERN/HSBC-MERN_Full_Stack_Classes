const fs = require("fs");



const path=require("path")


console.log(path.basename("C:\Users\Ashok Reddy\Desktop\MERN Classes\Day-13 Class 31-01-2026\fsModuleExample.js",".js"));

console.log(path.extname("C:\Users\Ashok Reddy\Desktop\MERN Classes\Day-13 Class 31-01-2026\fsModuleExample.js"));


//create a new file
fs.writeFile(
  "sample.txt",
  "Hello This is data inserting thought code",
  (err) => {
    console.log(err);
  },
);
 

//to read file data
fs.readFile("sample.txt","utf-8",(err,data)=>{
    console.log(data);
    
})


//to delete file 
fs.unlink("sample.txt",()=>{
  console.log("File deleted Successfully");
    
})