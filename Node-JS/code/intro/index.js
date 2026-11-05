// let username = "hasan ashraf";

// console.log(username)

const fs = require("fs");
const http = require("http");



// SERVER

const server = http.createServer((req, res) => {
    res.end("hello server")
})


server.listen(5500, "127.0.0.1", () => {
    console.log("server listening on port 5500");
    
})







// fs.writeFile(
//   "./server.txt",
//   "han jani kesy ho. kuch bataou apny baary mai..",
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       console.log("error agiya");
//       return 
//     }

//     console.log("kaam hogiyaaa...");
    
//   },
// );

// console.log("kaam hogiyaa..!");

// let readKerdiFile = fs.readFile("./text.txt", "utf-8" , (err, data) => {
//     console.log("line number 10 -->",data);

// })

// console.log(readKerdiFile);
