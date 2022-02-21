const Cource= require("../model/Cources");


//get all cources
const cource_all =async(req,res) =>{
    try {
        const cources = await Cource.find();
        console.log(cources);
        res.json(cources);
      } catch (error) {
        res.json({ message: error });
      }
};
//single cources
const cource_details =async(req,res) =>{
    try {
        const cources = await Cource.findById(req.params.courceId);
        res.json(cources);
      } catch (error) {
        res.json({ message: error });
      }
};
//add new cources
const cource_create =async(req,res) =>{
    const cources = new Cource({
        Buyer: req.body.Buyer,
        Host: req.body.Host,
        Amount: req.body.Amount,
        Coursetitle: req.body.Coursetitle,
        Description: req.body.Description,
        startDate: req.body.startDate,
        endDate:  req.body.endDate

      });
    try {
        const savedCource = await cources.save();
        res.send(savedCource);
      } catch (error) {
        res.status(400).send(error);
      }
};
//update cources
const cource_update =async(req,res) =>{
    try {
        const cources = {
          Buyer: req.body.Buyer,
          Host: req.body.Host,
          Amount: req.body.Amount,
          Coursetitle: req.body.Coursetitle,
          Description:req.body.Description,
          startDate:req.body.startDate,
          endDate:req.body.endDate
        };
    
        const updatedCource = await Cource.findByIdAndUpdate(
          { _id: req.params.courceId },
          cources
        );
        res.json(updatedCource);
      } catch (error) {
        res.json({ message: error });
      }
};
//deleate product
const cource_delete =async(req,res) =>{
    try {
        const removeCource = await Cource.findByIdAndDelete(req.params.courceId);
        res.json(removeCource);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports ={
    cource_create,
    cource_all,
    cource_details,
    cource_update,
    cource_delete
}