const Pet = require("../models/pet");

const getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const createPet = async (req, res) => {
  try {
    const { name, breed, age } = req.body;
    const pet = new Pet({ name, breed, age });
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { getPets, createPet };