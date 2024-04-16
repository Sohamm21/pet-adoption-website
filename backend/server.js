const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const petsRouter = require("./routes/pets-route");

require('dotenv').config();

if (!process.env.MONGODB_URI) {
  console.error("Error: MONGODB_URI environment variable is not set.");
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json()); 

app.use(cors());

app.use("/api", petsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
