const Model = require('./todo.model');

// this is how we combine data 
const agg = [
    {
      '$lookup': {
        'from': 'subtasks',      //name of thr module 
        'localField': '_id',    //yo chai local id ho sub task ko 
        'foreignField': 'todo', //yo chai todo task le id linxa aani dubai check gara
        'as': 'subtask' // subtask bhanne row banauxa
      }
    }
  ];

//create a todo list
const create = async(payload)=>{
    return await Model.create(payload);
};

//get all the data of todo
const getData = async()=>{
    return await Model.aggregate(agg);
};


//update data by id
const upateDataByID = async(id, payload)=>{
    return await Model.findByIdAndUpdate(id,payload,{new:true});
};

//delete data by id
const deleteDataByID = async(id)=>{
    return await Model.findByIdAndDelete(id);
};

module.exports = { create ,getData, upateDataByID, deleteDataByID};