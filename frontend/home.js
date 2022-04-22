const expenseForm=document.getElementById('expense_from')

const expense_item_cont=document.getElementById('expense_item_cont')
let count=1;
document.addEventListener('DOMContentLoaded',async()=>{

    const expense_item_cont=document.getElementById('expense_item_cont')
    var body = document.getElementsByTagName("BODY")[0]; 
    const expense=document.getElementById('expense')
    const expense_from=document.getElementById('expense_from')
    let premimum=true;
    if(premimum){
        
        expense_from.style.backgroundColor = "rgba(0, 0, 0, 0.855)"
        expense_from.style.color = "white"
        expense.style.backgroundColor = "rgba(0, 0, 0, 0.855)"
        body.style.backgroundImage  = "url('https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX24284715.jpg')"
        expense.style.color = "white"
        


    }

    console.log('dom loadeed')
    const token= localStorage.getItem('token')
    await axios.get('http://localhost:3000/getexpense',{
        headers:{"Authorization":token}
    })
    .then(data=>{
        console.log(data.data)
        data=data.data
        for(let i=0;i<data.length;i++){
            expense_item_cont.innerHTML=  expense_item_cont.innerHTML+` <div class="expense_item">
            <p>${count}</p>
            <p>${data[i].expenseamount}</p>
            <p>${data[i].description}</p>
            <p>${data[i].category}</p>
            <p>${data[i].createdAt}</p>
    
        </div>`
            count++;
        }
       

    })
})

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
        e.target.money_spend.value=''
        e.target.description.value=''
        e.target.category.value=''
        console.log(data.data.expense)
        data=data.data.expense
console.log(data.description)
        expense_item_cont.innerHTML=  expense_item_cont.innerHTML+` <div class="expense_item">
            <p>${count}</p>
            <p>${data.expenseamount}</p>
            <p>${data.description}</p>
            <p>${data.category}</p>
            <p>${data.createdAt}</p>`
            count=count+1;
    })
    .catch((err)=>{
        console.log(err)
    })


})