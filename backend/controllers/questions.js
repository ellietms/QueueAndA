const Question = require("../models/question.model");
const Answer = require("../models/answer.model");

module.exports = {
    
      allQuestions: (request, response) => {
        Question.find()
          .populate("answers")
          .then(questions => response.json({ questions }))
          .catch(err => response.send({ Error: err }));
      },
      askQuestion : (request, response) => {
        const newQuestion = new Question(request.body);
        newQuestion
          .save()
          .then(question => response.json({ question }))
          .catch(error => response.json({ error }));
      },
      getQuestionById : (request, response) => {
        const questionId = request.params.questionId;
        Question.findById(questionId)
          .populate("answers")
          .then(questionWithId => response.json({ questionWithId }))
          .catch(error => {
            response.status(500).json({ error });
          });
      },
      answerTheSpecificQuestion : (request, response) => {
        const newAnswer = new Answer(request.body);
        Question.findById(request.params.id)
          .then(question => {
            newAnswer
              .save()
              .then(answer => {
                question.answers.push(answer);
                question
                  .save()
                  .then(question => response.json({ question, answer }))
                  .catch(err => response.status(500).json({ Error: err }));
              })
              .catch(err => response.status(500).json({ Error: err }));
          })
      
          .catch(err => response.status(404).json({ Error: err }));
      }


};