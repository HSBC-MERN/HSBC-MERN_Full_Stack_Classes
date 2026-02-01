const User = require("../model/userModel");

//user register Controller

const register = async (req, res) => {

    const newUser = {
    fname:req.body.fname,
    email: req.body.email,
    phone: req.body.phone,
    password:req.body.password,
  };


//   const newUser1 = {
//     fname:"sai",
//     email: "saitesdfjss@gmail.com",
//     phone: "98734614330",
//     password:"admin@123",
//   };
//   const newUser2 = {
//     fname:"sai taj",
//     email: "saitesdfja@gmail.com",
//     phone: "98742613530",
//     password:"admin4@123",
//   };
//   const newUser3= {
//     fname:"sai taj",
//     email: "sadfja@gmail.com",
//     phone: "98742613530",
//     password:"admin4@123",
//   };


//  await  User.insertMany([newUser1, newUser2.newUser3])
    await  User.insertOne(newUser)

//  if(!newUser){
//    return  res.status(500).json({message:"server not found"})
//  }
 res.status(200).json({message:"user Register Successfully."})
};


//user login controller


const login=()=>{

}




module.exports={register, login}