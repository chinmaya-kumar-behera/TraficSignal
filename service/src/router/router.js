const express = require("express");
const { signUp, login } = require("../controller/userController");


const AppRouter = express.Router();

AppRouter.get('/', (req, res) => {
    res.send('API is working fine !')
})

// user router
AppRouter.post("/api/register", signUp);
AppRouter.post("/api/login", login);
AppRouter.get("/api/forgotpassword", signUp);

module.exports = AppRouter;