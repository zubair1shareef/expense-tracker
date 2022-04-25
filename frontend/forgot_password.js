
document.addEventListener("DOMContentLoaded",()=>{
console.log('DOMContentLoaded')

})

const form=document.getElementById('user_email_Form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e.target.email.value)
    var email=e.target.email.value

    axios.post('http://localhost:3000/forgotpassword',{email}).then(()=>{
        console.log('email send')
    })
    .catch(err=>{
        console.log(err)})

})

