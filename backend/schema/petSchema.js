const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: String,
  age: Number,
  gender: String,
  description: String,
  photos: [String],
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  location: String,
  ownerId: String,
});

module.exports = petSchema;
