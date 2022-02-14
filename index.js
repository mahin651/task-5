const express= require("express");
const app =express();

const mongoose= require("mongoose");
const dotenv=require("dotenv");


dotenv.config();

// connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology: true,useNewUrlParser:true},
    ()=> console.log("connected to db !")
);
app.listen(5000,() => (console.log("server is running upon port 5000 !")));
