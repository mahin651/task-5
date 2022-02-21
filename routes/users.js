const router =require("express").Router();
const usersController=require('../controllers/userController');

router.post("/",usersController.user_create);
router.get("/",usersController.user_all);
router.get("/:userID",usersController.user_details);
router.put("/:userID",usersController.user_update);
router.delete("/:userId",usersController.user_delete);

module.exports=router;