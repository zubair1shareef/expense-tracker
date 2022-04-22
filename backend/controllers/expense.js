const User = require("../models/user");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const saltRounds = 10;

const authenticate=(req,res,next)=>{
    try{
        const token=req.header('authorization')

        const userId=Number(jwt.verify(token,'jsddsfjk83bsjfbh87bdskfj'));
        User.findByPk(userId).then(user=>{
            console.log(JSON.stringify(user))
            req.user=user;
            next();
        })
        .catch(err=>{
            throw new Error(err)
        })
    }

    catch(err){
        console.log(err)
        return res.status(404).JSON({sucess:false})
    }
}

exports.addExpense=(req,res,next)=>{
    const {expenseamount,category,description}=req.body

    console.log(req.body)
    req.user.createExpense({expenseamount,category,description}).then((expense)=>{
         res.status(200).json({expense,success:true})
    })
    .catch(err=>{
        res.status(402).json({sucess:false,error:err})
    })

}
