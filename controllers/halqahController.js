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

const getAllHalaqaat = async (req, res, next) => {
  try {
    const halqah = await Halqah.find();
    res.status(200).json({
      status: "success",
      length: halqah.length,

      halqah,
    });
  } catch (err) {
    next(err);
  }
};

const getHalqah = async (req, res, next) => {
  try {
    const halqah = await Halqah.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        halqah,
      },
    });
  } catch (err) {
    next(err);
  }
};

const updateHalqah = async (req, res, next) => {
  try {
    const halqah = await Halqah.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!halqah) {
      res.status(404).json({ success: false });
    }
    res.status(201).json({ success: true, data: halqah });
  } catch (err) {
    res.status(400).json({ success: false, data: null });
  }
};

export { createHalqah, getAllHalaqaat, getHalqah, updateHalqah };
