const Model = require('./subtask.model');

//doing crud operation on the database

//Create data in the database; 
const create = async (payload) =>{
    return await Model.create(payload);    
};

//Update data in the database;
const updateDataByID = async(id, payload)=>{
    return await Model.findByIdAndUpdate(id,payload,{new:true});   
}

//Deleting data in the database 
const deleteDataById = async(id)=>{
    return await Model.findByIdAndDelete(id);
}



module.exports = {create, updateDataByID, deleteDataById};