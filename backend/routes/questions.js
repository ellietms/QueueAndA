const router = require("express").Router();
const Question = require("../models/question.model");
const Answer = require("../models/answer.model");

// all the questions:
router.route("/").get((request, response) => {
  Question.find()
    .populate("answers")
    .then(questions => response.json({ questions }))
    .catch(err => response.send({ Error: err }));
});

//create new Question :
router.route("/ask").post((request, response) => {
  const newQuestion = new Question(request.body);
  newQuestion
    .save()
    .then(question => response.json({ question }))
    .catch(error => response.json({ error }));
});

// Get Question By ID
router.route("/:questionId").get((request, response) => {
  const questionId = request.params.questionId;
  Question.findById(questionId)
    .then(questionWithId => response.json({ questionWithId }))
    .catch(error => {
      response.status(500).json({ error });
    });
});

//Answer a specific question with specific answer:
// router.route("/:id/answer").post((request, response) => {
//   const newAnswer = new Answer(request.body);
//   Question.findById(request.params.id)
//     .then(question => {
//       newAnswer
//         .save()
//         .then(answer => {
//           question.answers.push(answer);
//           question
//             .save()
//             .then(question => response.json({ question, answer }))
//             .catch(err => response.status(500).json({ Error: err }));
//         })
//         .catch(err => response.status(500).json({ Error: err }));
//     })

//     .catch(err => response.status(404).json({ Error: err }));
// });

router.route("/:questionId/answer").post((req, res) => {
  Question.findById(req.params.questionId)
    .populate("answers", "answer")
    .then(async question => {
      const newAnswer = new Answer(req.body);
      question.answers.push(newAnswer);
      await question.save();
      await newAnswer.save();
      res.json(question);
    })
    .catch(err => res.status(500).json({ Error: err }));
});

module.exports = router;
