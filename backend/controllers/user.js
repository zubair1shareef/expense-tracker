

const User=require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;



exports.createUser=async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const phonenumber=req.body.phonenumber;
    const password=req.body.password;
    console.log(typeof phonenumber);

    await  User.findAll({where:{email}}).then(ress=>{
        if(ress.length>0){
           
            res.json({msg:"user already exists"})
        }
        pass=''
         bcrypt.hash(password, saltRounds, function(err, hash) {
            pass=hash
        });
        User.create({
          
            name:name,
            email:email,
        
            phonenumber:5695451,
            password:pass

           
    
        })
        .then(()=>{
            res.json({name:req.body.name,email:req.body.email,pass})
    
        })
        .catch(err=>{
            console.log(err)
        })
       
    })
    .catch(err=>{
        console.log(err)
    })
  

   
   
}