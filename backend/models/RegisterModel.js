const mongoose = require('mongoose')
const RegisterSchema=require('./schemas/RegisterSchema')

const RegisterModel=mongoose.model('users',RegisterSchema);

module.exports=RegisterModel;