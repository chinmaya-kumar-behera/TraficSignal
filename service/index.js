
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const { connectToDatabase } = require("./src/config/dbConfig");
const AppRouter = require("./src/router/router");

const app = express();

dotenv.config();
connectToDatabase();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/", AppRouter);  

app.use((req, res, next) => {
  const error = new Error("Path not found.");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});