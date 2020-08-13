const router = require("express").Router();
let Question = require("../models/question.model");

router.route("/").get((req, res) => {
    Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const question = req.body.question;
    const date = Date.parse(req.body.date);
    const module = req.body.module;
    const answers = req.body.answers;


    const newQuestion = new Question({
        username,
        title,
        question,
        date,
        module,
        answers,
    });

    newQuestion.save()
    .then(() => res.json("Question added!"))
    .catch(err => res.status(400).json("Error:" + err));
});
// search by title of question 
router.route("/:questionsTitle").get((req, res) => {
    const title = req.params.questionsTitle;
    Question.find({title: title})
    .select()
    .exec()
    .then(titleFind =>{
        console.log("Form database ", titleFind);
        if (titleFind) {
            res.status(200).json(titleFind);
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