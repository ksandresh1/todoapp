const router = require("express").Router();
const subtaskController = require("./subtask.controller");

//Handels the post request from the client;
router.post("/",async (req,res, next)=>{
    try{
        const result = await subtaskController.create(req.body); 
        res.json({"data":result,"msg":"Successful"});
    }catch(err){
        next(err);
    }
})

router.get("/",async(req,res,next)=>{
try{
    const result = await subtaskController.readAllData();
    res.json({"data":result,"msg":"Successful"});
}catch(err){
    next(err);
}
})

module.exports = router;