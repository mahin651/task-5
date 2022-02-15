const mongoose=require("mongoose");

const courceSchema = new mongoose.Schema({
Buyer: String,
Host: String,
Amount: String,
Coursetitle:String,
Description:String,
startDate:Date,
endDate:Date,

}
);

module.exports=mongoose.model("Cource",courceSchema);