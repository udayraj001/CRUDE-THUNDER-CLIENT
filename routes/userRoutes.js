const express=require('express');
const router=express.Router();
const {getUser, getSpecificUser, postUser, patchUser, deleteUser} = require('../controller/userController.js');

router.get("/get",getUser);
router.get("/getSpecificUser/:id",getSpecificUser);
router.post("/post",postUser);
router.patch("/patch/:id",patchUser);
router.delete("/delete/:id",deleteUser);

module.exports=router;