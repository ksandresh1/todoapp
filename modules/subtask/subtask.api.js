const router = require("express").Router();
router.get("/",(req,res)=>{
    res.send("subtask api is called.......");
})

module.exports = router;