const router = require("express").Router();
const {render} = require("ejs");
router.get("/",(req,res)=>{
    res.render("index");
})





module.exports = router;