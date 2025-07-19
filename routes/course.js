function createCourseRoutes(app){
    app.post("/course/purchase",function(req,res){
    //in real world, u will expect user to purchase it using money
    res.json({
        message:"signup endpoint"
    })
})

app.get("/course/preview",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})


}
module.exports={
    createCourseRoutes:createCourseRoutes
}