import mongoose from 'mongoose';
import  URLSlugs from "mongoose-url-slugs"
const halqahSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageURL: {
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
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere'
    },
  },
  formattedAddress: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
  country: { type: String },

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