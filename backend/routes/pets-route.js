// routes/pets-route.js
const express = require("express");
const router = express.Router();
const petsController = require("../controllers/pet-controller");

// GET request handler for retrieving pets
router.get("/pets", petsController.getPets);

// POST request handler for creating a new pet
router.post("/pets", petsController.createPet);

module.exports = router;
