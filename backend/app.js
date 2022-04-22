const path = require('path');
const express=require('express');
const sequelize=require('./util/database')
const app=express()
const userRoutes=require('./routes/user')
const expenseRoutes=require('./routes/expense')
var cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(userRoutes)
app.use(expenseRoutes)

const User=require('./models/user')
const Expense=require('./models/expense')

User.hasMany(Expense)
Expense.belongsTo(User);



// sequelize.sync({force:true})
sequelize.sync()

.then(()=>{
    console.log('database is connected')
})
.catch(err=>{
    console.log(err)})
app.listen(3000)