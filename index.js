const express=require("express");
const{createUserRoutes}=require("./routes/user")
const{createCourseRoutes}=require("./routes/course")
//routing using express
const app=express();

app.use("/user",userRouter);
app.use("/course",courseRouter);

createUserRoutes(app);
createCourseRoutes(app);

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

