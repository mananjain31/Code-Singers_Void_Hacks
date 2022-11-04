const express = require("express");
const app = express();
const router = new express.Router();
app.use(router);

//controllers
const signup = require("./controller/signup");
const login = require("./controller/login");
const fetchFoodCollectors = require("./controller/fetchFoodCollectors");

//routes

router.post("/signup", signup, (req, res) => {
  console.log("Signed Up");
});

router.post("/login", login, (req, res) => {
  console.log("User Logged In!");
});

router.get("/foodcollectors", fetchFoodCollectors, (req, res) => {
  console.log("Fetched food collectors successfully!!");
});

module.exports = router;
