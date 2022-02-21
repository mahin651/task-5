const express= require("express");
const app =express();
const dotenv=require("dotenv");
const mongoose= require("mongoose");
const cors = require("cors");

dotenv.config();

// connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology: true,useNewUrlParser:true},
    ()=> console.log("connected to db !")
);

//import routes
const courceRoutes=require("./routes/cources")
const usersRoutes=require("./routes/users")

//Middle wares
app.use(express.json());
app.use(cors());

//route middleware
app.use("/api/cource",courceRoutes);
app.use("/api/users",usersRoutes);


app.listen(4000,() => (console.log("server is running upon port 4000 !")));
