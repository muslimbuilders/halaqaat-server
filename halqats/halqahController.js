import Halqah from '../models/halqahModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

const createHalqah = asyncHandler(async (req, res) => {
  const newHalqah = await Halqah.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      message: newHalqah,
    },
  });
});

const getAllHalaqaat = asyncHandler(async (req, res, next) => {
  
  const halqah = await Halqah.find({});
  res.status(200).json({
    status: 'success',
    data: { halqah },
  });
});

const getHalqah = asyncHandler(async (req, res, next) => {
  
    const halqah = await Halqah.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        halqah,
      },
    });
  
});

const updateHalqah = asyncHandler(async (req, res, next) => {
  
    const halqah = await Halqah.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
  
});

export { createHalqah, getAllHalaqaat, getHalqah, updateHalqah };
