import Halqah from "../models/halqahModel.js";
import asyncHandler from '../middleware/asyncHandler.js'
const createHalqah = async (req, res) => {
  const newHalqah = await Halqah.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      message: newHalqah,
    },
  });
};

const getAllHalaqaat = asyncHandler ( async (req, res, next) => {
  // try {
  //   let query;
  //   const requestQuery = {...req.query}

  //remove fields
  //const removedFields = ['select']
  // removedFields.forEach(param => delete requestQuery[param])
  // console.log(removedFields)

  // if(req.query.select){
  //   const fields = req.query.select.split(',').join(' ')
  //   query = query.select(fields)
  // }
  const halqah = await Halqah.find({});
  res.status(200).json({
    status: "success",
    length: halqah.length,
    data: { halqah },
  });
});

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
    console.log(err);
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
