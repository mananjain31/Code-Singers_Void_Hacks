const BinLocations = require("../models/binLocations");

const fetchFoodCollectors = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.body;
    const binLocations = await BinLocations.find(
      {
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [longitude, latitude],
            },
          },
        },
      },
      "-_id -__v"
    ).limit(5);
    res.status(200).json({
      code: 200,
      status: "success",
      message: `Displaying Food Collectors`,
      binLocations,
    });
  } catch (error) {
    res.status(400).send({
      code: 400,
      status: "fail",
      message: error.message,
    });
  }

  next();
};

module.exports = fetchFoodCollectors;
