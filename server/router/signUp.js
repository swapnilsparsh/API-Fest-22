const express=require("express")
const router=express.Router();
const mongoose=require('mongoose')
const User=require('../models/User')
//using bcrypt library for storing passwords 
const bcrypt=require('bcrypt');

router.post('/',(req,res,next)=>{
    console.log(req.body)
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        //determining if there is one more person with same email
        if(user.length>=1){
            return res.status(409).json({
                message:"User already exists"
            });
            
        }
        else{
            //Generate new user
            //generating the password
            bcrypt.hash(req.body.password, 10, (err,hash)=>{
                if(err){
                    //if we get any error we will show it
                    console.log(err);
                    return res.status(500).json({
                        error:err

                    });
                }else{
                    //or we can make a new user
                    const user=new User({
                        _id:new mongoose.Types.ObjectId,
                        firstName: req.body.firstName,
                        lastName:req.body.lastName,
                        email:req.body.email,
                        password:hash

                    });

                    user.save()
                    .then(result=>{
                        console.log(result);
                        res.status(201).json({
                            message:"User Created"
                        });
                    })
                    .catch(err=>{
                        console.log(err);
                        //internal error
                        res.status(500).json({
                            error:err
                        });
                    });

                }
            })


        }
    })
    //this error is for that the process has not completed
    .catch(err=>{
        console.log(err);
        res.status(422).json({
            error:err
        });
    });
});

module.exports=router;
