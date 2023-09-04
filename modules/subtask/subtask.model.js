const {Schema, model} = require('mongoose');

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
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = model("subTask", subTaskSchema);