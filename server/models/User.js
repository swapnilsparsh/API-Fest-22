const mongoose=require('mongoose')

//making schema and id for every user

const userSchema=mongoose.Schema({
    //getting uniqueid for every user
    _id:mongoose.Schema.Types.ObjectId,
    //getting their firstname and last name
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},

    email:{
        type:String,
        required:true,
        // getting unique email ids
        unique:true,
        //using regex to see if it is a valid email
        match:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
},
password:{type:String, required:true}


});

module.exports=mongoose.model('User', userSchema);