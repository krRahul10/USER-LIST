const mongoose = require("mongoose")

// const DB = "mongodb+srv:Todo-List:iamsrkfan@10@cluster0.cr6nb7n.mongodb.net/?retryWrites=true&w=majority"
const DB= `mongodb+srv://Octopus:octopus@cluster0.fmfphvh.mongodb.net/mernstack?retryWrites=true&w=majority`
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start11223")).catch((error) => console.log(error.message))