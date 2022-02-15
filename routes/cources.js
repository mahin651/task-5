const router =require("express").Router();

router.post("/");
router.get("/ ", productController.cource_all);
router.get("/courceID");
router.put("/courceID");
router.delete("/courceID");

module.exports=router;