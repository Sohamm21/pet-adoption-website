const Pet = require("../models/pet");

const getPets = async (req, res) => {
  try {
    const queryParams = req.query;
    const pets = await Pet.find(queryParams);
    res.status(200).json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


const getPetById = async (req, res) => {
  try {
    const petId = req.params.id;
    const pet = await Pet.findById(petId);
    if (!pet) {
      return res.status(404).json({ msg: "Pet not found" });
    }
    res.status(200).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


const createPet = async (req, res) => {
  try {
    const { name, species, breed, age, gender, description, photos, location, ownerId } = req.body;
    const pet = new Pet({ name, species, breed, age, gender, description, photos, location, ownerId });
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { getPets, createPet, getPetById  };
