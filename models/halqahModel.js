const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");
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
  },
  location: {
    city: {
      type: String,
      required: ["true", "City is Required"],
    },
    state: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
  },
  classHours: {
    start: {
      type: String,
    },
    end: {
      type: String,
      required: true,
    },
  },
  halqahTypes: [
    {
      type: String,
      enum: [
        "Tawhid",
        "Fiqh",
        "Hadith",
        "Tajweed",
        "Arabiyyah",
        "Yoruba",
        "Hausa",
        "Igbo",
        "Irab",
      ],
    },
  ],
});

halqahSchema.plugin(URLSlugs("name"));
module.exports = mongoose.model("Halqah", halqahSchema);
