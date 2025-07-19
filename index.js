const express=require("express");
const{userRouter}=require("./routes/user")
const{courseRouter}=require("./routes/course")
//routing using express
const app=express();

app.use("/api/v1/user",userRouter);
app.use("/api/v2/course",courseRouter);

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


app.listen(3000);

