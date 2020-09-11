const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const answerSchema = new Schema(
  {
    userEmail: { type: String, required: true },
    answer: { type: String, required: true },
    comments: [
      {
        type: Schema.Types.ObjectID,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
