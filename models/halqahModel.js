const mongoose = require("mongoose");

const halqahSchema = mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  location: {
    coordinates: {
      type: [Number],
      default: [0, 0],
    },
    address: {
      type: String,
      required: true,
    },
  },
  operatingHours: {
    open: {
      type: String,
      required: true,
    },
    close: {
      type: String,
      required: true,
    },
  },
  dishesTypes: [
    {
      type: String,
      enum: [
        "Tawhid",
        "Fiqh",
        "Hadith",
        "Pasta",
        "Pizza",
        "Dessert",
        "Japanese",
        "Salad",
        "Seafood",
      ],
      required: true,
    },
  ],
});

module.exports = mongoose.model("Halqah", halqahSchema);
