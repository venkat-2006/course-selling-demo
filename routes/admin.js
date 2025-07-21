
const {Router}=require("express");
const adminRouter=Router();

// adminRouter.use(adminMiddleWare)

adminRouter.post("/signup", function (req, res) {

    res.json({
        message: "signup endpoint"
    })
})
adminRouter.post("/signin", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})
adminRouter.post("/", function (req, res) {
    res.json({
        message: "course creation endpoint"
    })
})
adminRouter.put("/", function (req, res) {
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