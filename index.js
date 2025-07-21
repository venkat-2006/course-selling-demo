const express=require("express");
const mongoose=require("mongoose");

const{userRouter}=require("./routes/user")
const{courseRouter}=require("./routes/course")
const{adminRouter}=require("./routes/admin")
//routing using express
const app=express();
app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);

// createUserRoutes(app);
// createCourseRoutes(app);

// app.post("/user/signup",function(req,res){
//     res.json({
//         message:"signup endpoint"
//     })
// })
// app.post("/user/signin",function(req,res){
//     res.json({
//         message:"signin endpoint"
//     })
// })
// app.get("/user/purchases",function(req,res){
//     res.json({
//         message:"signup endpoint"
//     })
// })
// app.post("/course/purchase",function(req,res){
//     //in real world, u will expect user to purchase it using money
//     res.json({
//         message:"signup endpoint"
//     })
// })

// app.get("/course/preview",function(req,res){
//     res.json({
//         message:"signup endpoint"
//     })
// })

async function main(){

 await mongoose.connect("")
app.listen(3000);
}
main()
