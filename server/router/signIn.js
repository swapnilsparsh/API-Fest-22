const express=require('express')
const router=express.Router();
//encrypt the  password and check it with the password that is entered before during signup
const bcrypt=require('bcrypt');

//when the user signIn we will create a token 
// from server side and send it to the user
// const jwt=require('jsonwebtoken');

const User=require('../models/User');

router.post('/', (req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length<1){
            //no user found
            return res.status(401).json({
                message:"Auth Failed"
            });
        }
        //comparing the password because we found the user
        bcrypt.compare(req.body.password, user[0].password, (err,result)=>{
            if(err){
                return res.status(401).json({
                    message:"Auth Failed"
                });
            }
            if(result){
              return res.status(200).json({
                    message:"Auth successful",
                   
                   
                });
            }
            res.status(401).json({
                message:"Auth failed"
            });
        });

    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});

module.exports=router;