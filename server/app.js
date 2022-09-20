require('dotenv').config()

const express = require("express");
require('./db/conn')

const app = express();

const port = 8080;

// const DB= `mongodb+srv://Octopus:octopus@cluster0.fmfphvh.mongodb.net/?retryWrites=true&w=majority`
// DB="+srv:Todo-List:iamsrkfan@10@cluster0.cr6nb7n.mongodb.net/?retryWrites=true&w=majority"
// mongodb
app.listen(port, ()=>{
    console.log(`server is started port number ${port}`)
})