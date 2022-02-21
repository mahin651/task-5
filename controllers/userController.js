const User= require("../model/Users");
// all users
const user_all =async(req,res) =>{
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.json({ message: error });
      }
};

const user_details =async(req,res) =>{
    try {
        const users = await User.findById(req.params.userId);
        res.json(users);
      } catch (error) {
        res.json({ message: error });
      }
};
//add new cources
const user_create =async(req,res) =>{
    const users = new User({
        Username: req.body.Username,
        Email: req.body.Email,
       
      });
    try {
        const savedUser = await users.save();
        res.send(savedUser);
      } catch (error) {
        res.status(400).send(error);
      }
};
//update cources
const user_update =async(req,res) =>{
    try {
        const users = {
            Username: req.body.Username,
            Email: req.body.Email,
           
        };
    
        const updatedUser = await User.findByIdAndUpdate(
          { _id: req.params.userId },users
        );
        res.json(updatedUser);
      } catch (error) {
        res.json({ message: error });
      }
};
//deleate product
const user_delete =async(req,res) =>{
    try {
        const removeUser = await User.findByIdAndDelete(req.params.userId);
        res.json(removeUser);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports ={
    user_create,
    user_all,
    user_details,
    user_update,
    user_delete
}