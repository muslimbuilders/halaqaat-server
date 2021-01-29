import mongoose from 'mongoose';
import  URLSlugs from "mongoose-url-slugs"
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

const Halqah = mongoose.model("Halqah", halqahSchema);

export default Halqah