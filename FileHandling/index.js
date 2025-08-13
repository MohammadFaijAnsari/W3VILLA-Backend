const fs=require('fs');
// Create the File in the Synchronous manner

// fs.writeFileSync('./text.txt','Hello World in NodeJS');

// Create the File i Async

// fs.writeFile("./text.txt",'Hello File in Asynchronous Manner',(err)=>{
//     console.log(err)   //No error file creating time return null
// });

// Read the Data in text.file

    // Using readFile methos used
    // fs.readFile('./text.txt','utf-8',(err,res)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log(res);
    //     }
    // });
// Using readFileSync method used

// const data=fs.readFileSync('./text.txt','utf-8');
// console.log(data);

// AppnedFileSync

// fs.appendFileSync('text.txt',new Date().getDate().toLocaleString());
// fs.appendFileSync('./text.txt',`Date=${Date.now().toLocaleString()} \n`,(req,res)=>{
//    console.log(res);
// })

// Fetch the Date Using NODE JS

// const currentDate=new Date().toDateString();
// fs.appendFileSync('./text.txt',`Date=${currentDate} \n`,(err,req)=>{
//     console.log(currentDate);
// });
// Create the file copyFileSync Function

// fs.copyFileSync('./text.txt','copy.txt');
// unLink file / delete file using Node-JS

fs.unlinkSync('./copy.txt');



