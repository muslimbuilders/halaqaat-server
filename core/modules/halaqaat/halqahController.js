import Halqah from './halqahModel.js';
import asyncHandler from '../../middleware/asyncHandler.js';

const createHalqah = asyncHandler(async (req, res, next) => {
  const newHalqah = await Halqah.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      message: newHalqah,
    },
  });
});

const getAllHalaqaat = asyncHandler(async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  console.log("req user", req.user)
  const halqah = await Halqah.find({})
    .skip(limit * page - limit)
    .limit(limit * 1);
  res.status(200).json({
    status: 'success',
    per_page: limit,
    data: { halqah },
  });
});

const getHalqah = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const halqah = await Halqah.findById(id);

  const { name, location, coordinates, occurrence, classHours } = halqah;

  res.status(200).json({
    status: 'success',
    data: { name, location, coordinates, occurrence, classHours },
  });
});

const updateHalqah = asyncHandler(async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  const halqah = await Halqah.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    status: 'success',
    data: { halqah },
  });
});

export { createHalqah, getAllHalaqaat, getHalqah, updateHalqah };
