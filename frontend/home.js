const expenseForm=document.getElementById('expense_from')

expenseForm.addEventListener('submit',async(e)=>{
    e.preventDefault();

    expenseamount=e.target.money_spend.value
    description= e.target.description.value
    category= e.target.category.value
    const token= localStorage.getItem('token')
    console.log(token)

    axios.post('http://localhost:3000/addexpense',{
        expenseamount ,
        description,
        category
    },{
        headers:{"Authorization":token}
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })


})