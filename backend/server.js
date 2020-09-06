require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const questionsRouter = require("./routes/questions");
const answerRouter = require("./routes/answers");

app.use("/questions", questionsRouter);
app.use("/answers",answerRouter);

app.listen(port, () => {
  console.log(`Running at \`http://localhost:${port}\`...`);
});
