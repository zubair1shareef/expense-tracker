const path = require('path');
const express=require('express');
const sequelize=require('./util/database')
const app=express()
const userRoutes=require('./routes/user')
var cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(userRoutes)



//sequelize.sync({force:true})
sequelize.sync()

.then(()=>{
    console.log('database is connected')
})
.catch(err=>{
    console.log(err)})
app.listen(3000)