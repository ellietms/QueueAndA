const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const uri = process.env.DATABASE_URI;
const mongoOptions = { useUnifiedTopology: true };
const mongodb = require("mongodb");
const client = new mongodb.MongoClient(uri, mongoOptions);
app.use(express.json());

client.connect(() => {
  const db = client.db("QUEUEANDA");
  const collection = db.collection("Questions");

  //get all questions in the Home Page
  app.get("/api/questions", (request, response) => {
    collection.find({}).toArray((error, questions) => {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(200).send(questions);
      }
    });
  });

  //get one specific question from home page  
  app.get("/api/questions/question/:questionId",(request,response) => {
    // params or body for id?  
    const {questionId} = request.params;
      let QuestionId;
      if(mongodb.ObjectID.isValid(questionId)){
        QuestionId = new mongodb.ObjectID(questionId);
        collection.findOne({_id: QuestionId},(error,Question) => {
            if(error){
                response.status(500).send(error);
            }
            else{
                response.send(Question);
            }
        })
      }
      else{
          response.status(500).send("This Id is not Valid please try again");
      }
  })
  

  // answer to specific question
  app.post("/api/questions/question/:questionId/answer",(request,response) => {
    //how can I get the id of that specific question by clicking on it..
    // it should be params or body?
    const {questionId} = request.params;
    const {userName} = request.body;
    const {answer} = request.answer;
    
    const answerQuestion = {
        questionId:questionId,
        userName:userName,
        answer:answer
    }
    collection.insertOne(answerQuestion,(error,addAnswer) => {
        if(error){
            response.status(500).send(error);
        }
        else{
            response.status(201).send(addAnswer);
        }

    })
    response.send("Answer has been sent!")

  })

  
  
  
  // Ask a question
  app.post("/api/questions/ask", (request, response) => {
    const userName = request.body.userName;
    const userEmail = request.body.userEmail;
    const title = request.body.title;
    const question = request.body.question;
    const category = request.body.category;
    const newQuestion = {
      _id: new mongodb.ObjectId(),
      userName: userName,
      userEmail: userEmail,
      title: title,
      question: question,
      category: category,
    };
    collection.insertOne(newQuestion, (error, NewQuestion) => {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(NewQuestion);
      }
    });
    if (
      userEmail !== "" &&
      userName !== "" &&
      title != "" &&
      question != "" &&
      category.length !== 0
    ) {
      response.status(201).send("New Question has been sent");
    } else {
      response.status(500).send("please fill out all of required fields");
    }
  });
  // **
});
console.log("Working");
app.listen(3000);
