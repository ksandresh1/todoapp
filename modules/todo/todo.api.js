const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("todo api is called.......");
})


module.exports = router;