const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function (req, res) {
    //in real world, u will expect user to purchase it using money
    res.json({
        message: "purchase  endpoint"
    })
})

courseRouter.get("/preview", function (req, res) {
    res.json({
        message: "course preview  endpoint"
    })
})



module.exports = {
    courseRouter:courseRouter
}