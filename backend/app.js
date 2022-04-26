require('dotenv').config()
const path = require('path');
const express=require('express');
const sequelize=require('./util/database')
const app=express()
const userRoutes=require('./routes/user')
const expenseRoutes=require('./routes/expense')
const purchaseRoutes=require('./routes/purchase')
const forgetPasswordRoutes=require('./routes/forgotPassword')
var cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(userRoutes)
app.use(expenseRoutes)
app.use(purchaseRoutes)
app.use(forgetPasswordRoutes)

const User=require('./models/user')
const Expense=require('./models/expense')
const Order=require('./models/order')
const forgetPassword=require('./models/forgotpassword')

User.hasMany(Expense)
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(forgetPassword)
forgetPassword.belongsTo(User)



// sequelize.sync({force:true})
sequelize.sync()

.then(()=>{
    console.log('database is connected')
})
.catch(err=>{
    console.log(err)})
app.listen(3000)