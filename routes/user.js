// const express = require("express");
// const Router = express.Router;
// or

const {Router}=require("express");
const { userModel } = require("../db");
const jwt=require("jsonwebtoken");
const JWT_USER_PASSWORD="123311";
const userRouter=Router();
userRouter.post("/signup",async function (req, res) {
    const{email,password,firstName,lastName}=req.body;
     // use zod validation (hashing password)
     //hash password so plaintext is not stored in db

     await userModel.create({//put inside try catch block
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
     })

    res.json({
        message: "signup succeeded"
    })
})
userRouter.post("/signin", async function (req, res) {
    const{email,password}=req.body;
  //ideally password should be hashed so u cant compare user provided password and db password
    const user=await userModel.findOne({
        email:email,
        password:password
    });
    if(user){
        const token=jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD); //do cookie logic if u can
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"incorrect credentials"
        })

    }
})
userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "purchases endpoint"
    })
})


module.exports = {
    userRouter:userRouter
}