
const {Router}=require("express");
const adminRouter=Router();
const {adminModel}=require("../db");
const jwt=require("jsonwebtoken"); //bcrypt,zod,jsonwebtoken

const{JWT_ADMIN_PASSWORD}=require("../config");
const{adminMiddleware}=require("../middleware/admin");

// adminRouter.use(adminMiddleWare)

adminRouter.post("/signup",async function (req, res) {
    const{email,password,firstName,lastName}=req.body;
     // use zod validation (hashing password)
     //hash password so plaintext is not stored in db

     await adminModel.create({//put inside try catch block
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
     })

    res.json({
        message: "signup succeeded"
    })

    
})

adminRouter.post("/signin", async function (req, res) {
    const{email,password}=req.body;
  //ideally password should be hashed so u cant compare user provided password and db password
    const admin=await adminModel.findOne({
        email:email,
        password:password
    });
    if(admin){
        const token=jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD); //do cookie logic if u can
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"incorrect credentials"
        })

    }
    
})

adminRouter.post("/course", adminMiddleware,async function (req, res) {
    const adminId=req.userId;

    const{title,description,imageUrl,price}=req.body;

    await courseModel.create({
       title: title,
       description:description,
       imageUrl:imageUrl,
       price:price,
       adminId:adminId
    })




    res.json({
        message: "course created",
        courseId:course._id

    })
})
adminRouter.put("/course", function (req, res) {
    res.json({
        message: "course creation endpoint"
    })
})
adminRouter.get("/course/bulk", function (req, res) {
    res.json({
        message: "bulk course display endpoint"
    })
})
module.exports = {
    adminRouter:adminRouter
}