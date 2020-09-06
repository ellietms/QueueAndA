const router = require("express").Router();
const Answer = require("../models/answer.model");
const Comment = require("../models/comment.model");

router.route("/:id/comment").post((request, response) => {
  const newComment = new Comment(request.body);
  Answer.findById(request.params.id)
    .then((answer) => {
      newComment
        .save()
        .then((comment) => {
          answer.comments.push(comment);
          answer
            .save()
            .then((answer) => response.json({ answer, comment }))
            .catch((err) => response.status(500).json({ Error: err }));
        })
        .catch((err) => response.status(500).json({ Error: err }));
    })

    .catch((err) => response.status(404).json({ Error: err }));
});

module.exports = router;
