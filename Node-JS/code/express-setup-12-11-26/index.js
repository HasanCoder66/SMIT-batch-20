import express from 'express';


const app = express();


// req body --> usko read ker parahy hain..
app.use(express.json())

// database 

let users = [
    {
        username : "hasanCoder66",
        email : "codermhasan@gmail.com"
    },
    {
        username : "sufiyan",
        email : "sufiyan@gmail.com"
    },
]

// create
app.post("/user", (req, res) => {


    const data = req.body;


   if(data){
     users.push(data)
     
   }

   if(!data){
    return res.status(400).json({
        status : "false",
        message: "some problem"
    })
   }

    res.status(200).json({
        status : "true",
        message :"user added sucessfully"
    })
})


// read
app.get("/user", (req, res) => {

    res.status(200).json({
        status : "true",
        data : users
    })
})


// get single user

app.get("/user/:username", (req, res) => {
    
    const {username} = req.params;

    // console.log(param);

    let findUser = users.find((user) => {
        if(user.username == username){
            return user
        }
        
    })
    

    res.status(200).json({
        status : "true",
        message: "single user data",
        data : findUser
    })
})



// update
app.put("/user/:username", (req, res) => {

    const body = req.body;
    const {username} = req.params;

   users = users.map((user) => {
    if(user.username == body.username){
        return user = body
    }

    return user
})

    res.status(200).json({
        status : "true",
        message:"updated user successfully!"
    })
})


// delete
app.delete("/user/:username", (req, res) => {

    const {username} = req.params;

   users = users.filter((user) => user.username != username)

    res.status(200).json({
        status : "true",
        message:"deleted user successfully!"
    })
})

app.listen(5500, () => {
    console.log("server is listening on port 5500");
    
})



