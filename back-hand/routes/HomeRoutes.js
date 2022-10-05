const express=require('express')
const router=express.Router();
const HomeController=require('../controller/HomeController/HomeController')
router.get('/',HomeController.HomeController)

module.exports=router