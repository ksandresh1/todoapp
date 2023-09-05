const Model = require('./todo.model');

//create a todo list
const create = async(payload)=>{
    return await Model.create(payload);
};

//get all the data of todo
const getData = async()=>{
    return await Model.find();
};

//get data by id
const getDataByID = async(id)=>{
    return await Model.findById(id);
};

//update data by id
const upateDataByID = async(id, payload)=>{
    return await Model.findByIdAndUpdate(id,payload,{new:true});
};

//delete data by id
const deleteDataByID = async(id)=>{
    return await Model.findByIdAndDelete(id);
};

module.exports = { create ,getData, getDataByID, upateDataByID, deleteDataByID};