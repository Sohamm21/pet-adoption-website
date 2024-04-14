require('dotenv').config();

const express = require("express");
const app = express();
const petsRouter = require("./routes/pets-route");
const usersRouter = require("./routes/users-route");
const connectDb = require("./utils/db");


connectDb();

app.use(express.json());

app.use("/api/pets", petsRouter);
app.use("/api/users", usersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});