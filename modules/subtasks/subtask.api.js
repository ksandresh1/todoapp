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

//get all the data from the database
router.get("/",async(req,res,next)=>{
try{
    const result = await subtaskController.readAllData();
    res.json({"data":result,"msg":"Successful"});
}catch(err){
    next(err);
}
})

// update data using id 
router.put("/:id", async(req,res,next)=>{
    try{
        const {id} = req.params;
        const result = await subtaskController.updateDataByID(id,req.body);
        res.json({"data":result,"msg":"sucessful"});

    }catch(err){
        next(err);
    }

})
// delete data using id
router.delete("/:id",async(req,res,next)=>{
    try{
        const {id} = req.params;
        const result = await subtaskController.deleteDataById(id);
        res.json({"data":result,"msg":"sucessful"});

    }catch(err){
        next(err);
    }
}) 
module.exports = router;