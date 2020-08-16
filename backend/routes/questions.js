const router = require("express").Router();
const Question = require("../models/question.model");
const Answer = require("../models/answer.model");

router.route("/").get((req, res) => {
  Question.find()
    .populate("answers")
    .then((questions) => res.json(questions))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/ask").post((req, res) => {
  const newQuestion = new Question(req.body);

  newQuestion
    .save()
    .then(() => res.json("Question added!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:questionId/answer").post((req, res) => {
  Question.findById(req.params.questionId)
    .then((question) => {
      const newAnswer = new Answer(req.body);
      question.answers.push(newAnswer);
      console.log(newAnswer);
      question.save().then((question) => {
        newAnswer.save().then((answer) => {
          res.json(answer).catch((err) => res.status(500).json({ err }));
        });
      });
    })
    .catch((err) => res.status(500).json({ Error: err }));
});

router.route("/:questionId").get((req, res) => {
  Question.findOne({ _id: req.params.questionId })
    .populate("answers", "answer")
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
