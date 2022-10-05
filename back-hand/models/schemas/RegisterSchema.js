const mongoos=require('mongoose')
const Schema=mongoos.Schema;

let singUp =new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    confirmPassword:{type:String,required:true}


});

module.exports=singUp