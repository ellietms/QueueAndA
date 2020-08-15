
const router = require("express").Router();
const Question = require("../models/question.model");
const Answer = require("../models/answer.model");

// all the questions:
router.route('/').get((req, res) => {
	Question.find().populate('answers').select('answers').then((Find, err) => {
		console.log('Form database ', Find);
		if (Find) {
			res.status(200).json(Find);
		} else {
			res.status(400).json('No valid entry found for Data :' + err);
		}
	});
});

//create new Question :
router.route('/ask').post((req, res) => {
	const newQuestion = new Question(req.body.question);
	console.log(newQuestion);
	newQuestion.save((err, question) => {
		if (err) {
			return res.status(500).json({ 'something is wrong': err });
		} else {
			return res.status(201).json(question);
		}
	});
});

//Answer part:
router.route('/:id/answer').post((req, res) => {
	Question.findById(req.params.id, (err, question) => {
		console.log(question);
		const newAnswer = new Answer(req.body.answers);
		newAnswer.save((err, answer) => {
			if (err) {
				res.status(500).json({ 'something is wrong ': err });
			}
			question.answers.push(answer);
			newAnswer.save((err, newAnswer) => {
				if (err) {
					return res.status(500).json({ 'something is wrong sec ': err });
				} else {
					return res.status(201).json({ newAnswer });
				}
			});
		});
	});
});

//Get Question By ID
router.route('/:questionId').get((req, res) => {
	const questionId = req.params.questionId;
	console.log(questionId);
	Question.findById(req.params.questionId, (err, id) => {
		console.log(id);
		console.log('Form database ', id);
		if (id) {
			res.status(200).json(id);
		} else {
			res.status(400).json('No valid entry found for ID ');
		}
	}).catch((err) => {
		console.log(err);
		res.status(500).json({ error: err });
	});
});

// search by title of question
// router.route("/:questionsTitle").get((req, res) => {
//     const title = req.params.questionsTitle;
//     Question.find({title: title})
//     .select()
//     .exec()
//     .then(titleFind =>{
//         console.log("Form database ", titleFind);
//         if (titleFind) {
//             res.status(200).json(titleFind);
//         } else {
//             res.status(400).json("No valid entry found for Title :" + err)
//         }
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({error: err });
//     });
// });


module.exports = router;
