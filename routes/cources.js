const router =require("express").Router();
const courceController=require('../controllers/courceController');

router.post("/",courceController.cource_create);
router.get("/",courceController.cource_all);
router.get("/:courceID",courceController.cource_details);
router.put("/:courceID",courceController.cource_update);
router.delete("/:courceId",courceController.cource_delete);

module.exports=router;