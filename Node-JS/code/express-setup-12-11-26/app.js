// console.log("hello world");


import express from 'express';


const app = express();
const PORT = 5500;


let users = []

app.use(express.json())


// / basic api
app.get("/", (req, res) => {
    res.send("welcome to website!")
})



// check health 
app.get("/health", (req, res) => {
    res.status(200).json({
        status : "true",
        data : [1,2,3]
    })
})


// register user
app.post("/signup", (req, res) => {

    console.log("request body --->",req.body);

    
    if(req.body){
        users.push(req.body)
    }



    res.status(201).json({
        status: "true",
        message : "user signup successfully",
        data : users
    })
})

// delete user
app.delete("/user", (req, res) => {
    res.status(200).json({
        status:"true",
        message : "user deleted successfully!"
    })
})


// edit user
app.put("/user", (req, res) => {
    res.status(200).json({
        status:"true",
        message : "user edited successfully!"
    })
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);  
})