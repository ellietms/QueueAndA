const router = require("express").Router();
const Question = require("../models/question.model");
const Answer = require("../models/answer.model");

// all the questions:
router.route("/").get((req, res) => {
    Question.find()
    .populate('answers')
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json("Error:" + err));
});

//create new Question :
router.route("/ask").post((req, res) => {
    const newQuestion = new Question(req.body.question);
    newQuestion.save((err , question) =>{
        if(err) {
            return res.status(500).json({"something is wrong" : err});
        }else {
            return res.status(201).json(question);
        }
    })

    // });

    // newQuestion.save()
    // .then(() => res.json("Question added!"))
    // .catch(err => res.status(400).json("Error:" + err));
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

//Answer part:
router.route("/:id/answer").post((req, res) => {
    Question.findById(req.params.id, (err, question) => {
        console.log(question);
        const newAnswer = new Answer(req.body.answer);
        newAnswer.save((err, answer) => {
            if(err) {
                res.status(500).json({"something is wrong " : err});
            }else {
                res.status(201).json({answer});
            }
            question.answers.push(newAnswer);
            newAnswer.save((err, newAnswer) => {
                if(err) {
                    res.status(500).json({"something is wrong sec " : err});
                }else {
                    res.status(201).json({newAnswer});
                }
            })
        })
    });
});

//Get Question By ID
router.route("/:questionId").get((req, res) => {
        const id = req.params.questionId;
        Question.findOne({__id: id})
        .select()
        .exec()
        .then(idFind =>{
            console.log("Form database ", idFind);
            if (idFind) {
                res.status(200).json(idFind);
            } else {
                res.status(400).json("No valid entry found for Title :" + err)
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err });
        });
    });
module.exports = router;
