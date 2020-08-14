const mongoose = require("mongoose");
const Answer = require("../models/answer.model")
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    userEmail: {type: String, required: true},
    title: {type: String, required: true},
    question: {type: String, required: true},
    module: {type: String, required: true},
    answers:[{type:String,ref:"Answer"}],
    resolved: {type: Boolean, default: false}
}, {
    timestamps: true,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;