const {Schema, model} = require('mongoose');
const commonData = require('../commons/commonSchema');

// _id has the object type in the database;
const {ObjectId} = Schema.Types;

const subTaskSchema = new Schema({
    subtask:{
        type:String, 
        required: true
    },
    status: {
        type: String,
        enum: ["pending","completed"],
        required: true,
        default: "pending"
    },
    todo: { 
        type:ObjectId, 
        ref: "Todo"
    },
    ...commonData
});

module.exports = model("subTask", subTaskSchema);