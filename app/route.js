const express = require("express");
const app = express();
const router = new express.Router();
app.use(router);

//controllers
const signup = require("./controller/signup");
const login = require("./controller/login");
const fetchFoodCollectors = require("./controller/fetchFoodCollectors");
const binLocations = require("./controller/binLocator");
const imagePredictor = require("./controller/imagePredictor");

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

router.get("/binlocations", binLocations, (req, res) => {
  console.log("Fetched nearest 5 bins successfully!!");
});

router.post("/imageprediction", imagePredictor, (req, res) => {
  console.log("Image Predicted Successfully!!");
});

module.exports = router;
