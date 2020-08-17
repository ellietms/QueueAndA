const router = require('express').Router();
const Question = require('../models/question.model');
const Answer = require('../models/answer.model');

// all the questions:
router.route('/').get((req, res) => {
	Question.find()
		.populate('answer')
		.then((questions) => res.json(questions))
		.catch((err) => res.status(400).json('Error:' + err));
});

// create new Question :
router.route('/ask').post((req, res) => {
	const newQuestion = new Question(req.body);
	newQuestion.save().then((result) => res.json(result)).catch((err) => res.status(500).json({ err }));
});

// Get Question By ID
router.route('/:questionId').get((req, res) => {
	Question.findById(req.params.questionId)
		.then((question) => res.json(question))
		.catch((err) => res.status(400).json({ err }));
});

// Answer part:
router.route('/:id/answer').post((req, res) => {
	Question.findById(req.params.id)
		.then((question) => {
			const newAnswer = new Answer(req.body);
			question.answers.push(newAnswer);
			question.save();
			return question;
		})
		.then((newAnswer) => {
			newAnswer.save();
			return newAnswer;
		})
		.then((result) => res.json(result))
		.catch((err) => res.status(500).json({ err }));
});

module.exports = router;
