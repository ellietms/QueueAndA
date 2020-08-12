const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    question: {type: String, required: true},
    date: {type: Date, required: true},
    module: {type: String, required: true},
    answers: {type: Array, required: true}
}, {
    timestamps: true,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;