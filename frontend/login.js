const form=document.getElementById('login_form')

form.addEventListener('submit',async(e)=>{
    e.preventDefault();
   const email= e.target.email.value
   const password= e.target.password.value
   console.log(password);
   axios.post('http://localhost:3000/login',{
    email,password
   }).then(data=>{
    console.log(data.status)
       if(data.status==200){
        console.log(data)
       }
       else if(data.status==404){
        console.log("user not found") 
       }
       else if(data.status==401){
        console.log("password incorrect") 
       }
       

   })
   .catch(error=>{
       console.log(error)
   })



} )