const mongoose = require('mongoose');
 const monngodb_url="mongodb://127.0.0.1:27017/onlineStore";
 mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
     console.log("mongodb is connected");
 }).catch((error)=>{
     console.log("mondb not connected");
     console.log(error);
     db.close();
 });