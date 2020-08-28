const router = require("express").Router();
const Question = require("../models/question.model");
const Answer = require("../models/answer.model");
const QuestionsController = require('../controllers/questions')

// all the questions:
router.route("/").get(QuestionsController.allQuestions);

//create new Question :
router.route("/ask").post(QuestionsController.askQuestion);

// Get Question By ID
router.route("/:questionId").get(QuestionsController.getQuestionById);

//Answer a specific question with specific answer:
router.route("/:id/answer").post(QuestionsController.answerTheSpecificQuestion);

module.exports = router;
