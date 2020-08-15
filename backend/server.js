const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
// const bodyParser = require("body-parser");
//const route = express.Router();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
// app.use(bodyParser.json());

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
//const usersRouter = require("./routes/users");
//const route = require("./routes/questions");

app.use("/questions", questionsRouter);
//app.use("/users", usersRouter)

app.listen(port, () => {
  console.log(`Running at \`http://localhost:${port}\`...`);
});
