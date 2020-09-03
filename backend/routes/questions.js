const router = require("express").Router();
const Question = require("../models/question.model");
const Answer = require("../models/answer.model");
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'QueueAndA.uk@gmail.com',
		pass: 'asdfghjkl1!'
	}
});

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
    .populate("answers")
    .then(questionWithId => response.json({ questionWithId }))
    .catch(error => {
      response.status(500).json({ error });
    });
});

//Answer a specific question with specific answer:
router.route("/:id/answer").post((request, response) => {
  const newAnswer = new Answer(request.body);
  Question.findById(request.params.id)
    .then(question => {
      newAnswer
        .save()
        .then(answer => {
          question.answers.push(answer);
          let mailOptions = {
            from: 'zarghani.m@gmail.com',
            to: question.userEmail ,
            subject: 'Notification From QueueAndA',
            html: '<div><img src="https://www.newsshopper.co.uk/resources/images/2669419.jpg"/><h1>QueueAndA</h1><br><h2>Hi</h2><h3>your question has been answered by someone.</h3><h3>You can go to the link and get answer. </h3><div><a href="https://cyf-queueanda.netlify.app/">QueueAndA</a></div></div>'
          };
          transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          question
            .save()
            .then(question => response.json({ question, answer }))
            .catch(err => response.status(500).json({ Error: err }));
        })
        .catch(err => response.status(500).json({ Error: err }));
    })

    .catch(err => response.status(404).json({ Error: err }));
});

module.exports = router;
