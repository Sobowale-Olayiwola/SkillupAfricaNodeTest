const Mongoose = require("mongoose");

const todoSchema = Mongoose.Schema({
    uniqueId: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require: true
    },
    isCompleted: {
        type:Boolean,
        default:false
    }
});

module.exports = Mongoose.model("Todos",todoSchema)
