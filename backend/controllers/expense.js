
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

exports.getExpense=(req,res,next)=>{
    req.user.getExpenses().then(expense=>{
        res.json(expense)
    })

}
