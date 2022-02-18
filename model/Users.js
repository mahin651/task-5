const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
Username: String,
Email: String,

}
);

module.exports=mongoose.model("User",userSchema);