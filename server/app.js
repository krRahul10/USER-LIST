require("dotenv").config();

const express = require("express");
require("./db/conn");
const mongoose = require("mongoose");
const users = require("./models/userSchema");
const app = express();
const cors = require("cors");

const router = require("./routes/router");

const port = process.env.PORT || 8080;



app.use(cors());

app.use(express.json());

app.use(router);

// const DB= `mongodb+srv://Octopus:octopus@cluster0.fmfphvh.mongodb.net/?retryWrites=true&w=majority`
// DB="+srv:Todo-List:iamsrkfan@10@cluster0.cr6nb7n.mongodb.net/?retryWrites=true&w=majority"
// mongodb

app.get("/", (req, res) => {
  res.json("server started by Rahul")
})
app.listen(port, () => {
  console.log(`server is started port number ${port}`);
});
