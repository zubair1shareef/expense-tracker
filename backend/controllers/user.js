

const User=require('../models/user')

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
        User.create({
            name:name,
            email:email,
        
            phonenumber:5695451,
            password:password
    
        })
        .then(()=>{
            res.json({name:req.body.name,email:req.body.email})
    
        })
        .catch(err=>{
            console.log(err)
        })
       
    })
    .catch(err=>{
        console.log(err)
    })
  

   
   
}