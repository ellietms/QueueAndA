const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err))
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;

    const newUser = new User({username, email, role});

    newUser.save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error:" + err))
});

// search by UserName of question 
router.route("/:username").get((req, res) => {
    const username = req.params.username;
    User.find({username: username})
    .select()
    .exec()
    .then(usernameFind =>{
        console.log("Form database ", usernameFind);
        if (usernameFind) {
            res.status(200).json(usernameFind);
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