const mongoose = require("mongoose");

const eWasteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User" },
});

const eWaste = mongoose.model("eWastes", eWasteSchema);

module.exports = eWaste;
