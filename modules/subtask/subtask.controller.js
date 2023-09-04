const Model = require('./subtask.model');

//doing crud operation on the database

//Create data in the database 
const create = async (payload) =>{
    return await Model.create(payload);    
};

//Read data in the database
const readAllData = async() =>{
    return await Model.find();
};




module.exports = {create, readAllData}