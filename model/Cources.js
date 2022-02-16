const mongoose=require("mongoose");

const courceSchema = new mongoose.Schema({

Buyer: String,
Host: String,
Amount: Number,
Coursetitle:String,
Description:String,
startDate:String,
endDate:String,

}
);

module.exports=mongoose.model("Cource",courceSchema);