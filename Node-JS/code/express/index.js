import express from 'express'


const app = express();


app.use(express.json())
app.get("/", (req, res) => {
    console.log("request -->",req);

    res.status(200).send("successfully request hit")
    
})

app.post("/signup", (req, res) => {
    console.log("request -->",req.body);

    res.status(200).send("signup req successfully hit")
    
})


app.put("/edit-user", (req, res) => {
    console.log("request -->",req.body);

    res.status(200).send("updated user successfully!")
    
})

app.delete("/delete-user", (req, res) => {

    res.status(200).send("delete user successfully!")
    
})

app.post("/signup", (req, res) => {
    console.log("request -->",req.body);

    res.status(200).send("signup req successfully hit")
    
})

app.listen(5500, () => {
console.log("server is listening on port 5500");

})