const mongoose = require("mongoose");

const binLocatorSchema = new mongoose.Schema({
  location: {
    type: "Point",
    coordinates: [Number],
  },
});

binLocatorSchema.index({ location: "2dsphere" });

const binLocator = mongoose.model("binLocations", binLocatorSchema);

module.exports = binLocator;
