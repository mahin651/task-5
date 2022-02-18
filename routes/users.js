const router =require("express").Router();
const usersController=require('../routes/users');

router.post("/",usersController.user_create);
router.get("/",usersControllers.user_all);
router.get("/:userID",usersControllers.user_details);
router.put("/:userID",usersControllers.user_update);
router.delete("/:userId",usersControllers.user_delete);

module.exports=router;