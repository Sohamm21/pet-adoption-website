const mongoose = require("mongoose");
const petSchema = require("../schema/petSchema");

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
