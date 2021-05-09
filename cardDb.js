// jshint : esversion : 6
const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  name: String,
  imageURL: String,
});

const Cards = mongoose.model("Cards", cardSchema);
module.exports = Cards;
