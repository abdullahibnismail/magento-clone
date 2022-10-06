const express=require('express')
const router=express.Router();
const RegistorController=require('../controller/registorController/RegistorController')
router.post('/register',RegistorController.RegistorController)

module.exports=router