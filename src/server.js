const express = require("express")
const userController = require("./controllers/users.controllers")
const connect = require("./configs/db")
const app = express()
app.use(express.json())

app.use("/users",userController)





app.listen(2345,async(req,res)=>{
    await connect()
    console.log("listing to port 2345")
})