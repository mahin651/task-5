const mongoose=require("mongoose");

const courceSchema = new.mongoose.Schema({
Buyer: String,
Host: String,
Amount:Int16Array,
Coursetitle:String,
Description:String,
startDate:Date,
endDate:VarDate,

}
);

module.exports=mongoose("Cource",courceSchema);