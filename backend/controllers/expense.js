
const Expense=require('../models/expense')
const User = require('../models/user')
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
        console.log(typeof Number(JSON.stringify( expense[0].expenseamount)))
        var expencedata= expense
        var totalexpense=0;
        // console.log(expencedata[0].expenseamount);
        for(let i=0;i<expencedata.length;i++){

            totalexpense=totalexpense+expencedata[i].expenseamount
        }
        console.log(totalexpense)
        res.json({expense,totalexpense})
    })

}

exports.getAllExpense=async(req,res)=>{
    Expense.findAll().then(data=>{

        var k=data[0]
        k['total']=424
        console.log(k)
        res.json(data.total)
    })
}
exports.getExpenseById=(req,res)=>{
    const id=req.params.userId;
    console.log(id)

    Expense.findAll({where:{userId:id}}).then(expense=>{

        User.findByPk(id).then((user)=>{
            res.json({expense,name:user.name})

        })

       
    })

}