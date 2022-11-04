const BinLocations = require("../models/binLocations");

const binLocations = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;
    const binLocations = await BinLocations.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
        },
      },
    }).limit(5);
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

module.exports = binLocations;
