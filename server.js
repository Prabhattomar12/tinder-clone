const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const Cards = require("./cardDb");

const app = express();
const port = process.env.port || 4000;
const connectionURI =
  "mongodb+srv://tinder-clone:tinder-clone@cluster0.gpb1m.mongodb.net/tinderCloneDatabase?retryWrites=true&w=majority";
// App config

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
// middleware
app.use(express.json());
app.use(Cors());
// db config

// endpoints

app.get("/", (req, res) => {
  console.log(Cards.find());
});

app.post("/tinder/cards", (req, res) => {
  console.log(req.body);
  const dbCards = req.body;

  Cards.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err); // internal server error
    } else {
      res.status(201).send(data); // created
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log("Server is running at port : ", port));
