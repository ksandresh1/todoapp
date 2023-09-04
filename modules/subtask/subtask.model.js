const {Schema, model} = require('mongoose');
const commonData = require('../common/commonSchema');

const subTaskSchema = new Schema({
    subtask:{
        type:String, 
        require:true
    },
    status: {
        type: String,
        enum: ["pending","completed"],
        require: true,
        default: "pending"
    },
    ...commonData
});

module.exports = model("subTask", subTaskSchema);