const express = require("express");
const app = express();
const router = new express.Router();
app.use(router);

//controllers
const signup = require("./controller/signup");
const login = require("./controller/login");

//routes

router.post("/signup", signup, (req, res) => {
    console.log("Signed Up");
})

router.post("/login", login, (req, res) => {
    console.log("User Logged In!");
})

module.exports = router;