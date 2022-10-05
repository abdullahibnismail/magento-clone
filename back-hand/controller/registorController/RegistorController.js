
const singUp =require('../../models/RegisterModel')

const RegistorController=async(req,res)=>{
 try {
    console.log(req.body)
       let user=  new singUp(req.body);
       let result = await user.save();
       console.log(result)
 } catch (error) {
    console.log(error)
 }
 }

 module.exports={
    RegistorController,
 }