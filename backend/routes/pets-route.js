const express = require("express");
const router = express.Router();
const petsController = require("../controllers/pet-controller");

router.get("/pets", petsController.getPets);
router.post("/pets", petsController.createPet);
router.get("/pets/:id", petsController.getPetById); // Corrected route for getting a pet by its ID

module.exports = router;
