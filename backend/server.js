const express = require("express");
const HomeRoutes=require('./routes/HomeRoutes')
const UserRoutes=require('./routes/UserRoutes')
const app=express();
app.use(express.json());
require('./configration/connection/connection')

app.use('/',HomeRoutes)
app.use('/user',UserRoutes)





app.listen(5000,()=> console.log("server is runing......"))