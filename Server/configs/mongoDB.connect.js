const mongoose = require("mongoose");

const mongooseConnect = ()=>{
    mongoose.connect("mongodb+srv://thevsami:12345@cluster0.mywfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("\u001b[1;34m⚡[server]: " + `\u001b[0mConnected to MongoDB`)
    })
    .catch((err)=>{
        console.log("\u001b[1;34m⚡[server]: " + `\u001b[0mError connecting to mongodb: `, err)
    })
}
// mongodb://127.0.0.1:27017/bin-tracker 
//mongodb+srv://thevsami:<12345>@cluster0.mywfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
module.exports = mongooseConnect