import Halqah from "../models/halqahModel.js";

const createHalqah = async (req, res) => {
  const newHalqah = await Halqah.create(req.body);
  console.log(newHalqah);
  res.status(201).json({
    status: "success",
    data: {
      message: newHalqah,
    },
  });
};



const getAllHalaqaat = async (req, res) => {
  try {
    const Halaqaat = await Halqah.find();
    res.status(200).json({
      status: "success",
      data: {
        Halaqaat,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "success",
      err,
    });
  }
};

const getHalqah = async (req, res) => {
  try {
    const halqah = await Halqah.findOne({ slug: req.body.slug });

    res.status(200).json({
      status: "success",
      data: {
        halqah,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      err,
    });
  }
};

export {createHalqah, getAllHalaqaat, getHalqah}