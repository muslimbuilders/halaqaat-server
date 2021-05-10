import Halqah from '../models/halqahModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

const createHalqah = asyncHandler(async (req, res, next ) => {

  const newHalqah = await Halqah.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      message: newHalqah,
    },
  });
}) 


const getAllHalaqaat = asyncHandler(async (req, res, next ) => {

  const { page = 1, limit = 10 } = req.query

  const halqah = await Halqah.find({}).skip((limit * page) - limit).limit(limit * 1);
  res.status(200).json({
    status: 'success',
    data: { halqah },
  });
});

const getHalqah = asyncHandler( async (req, res, next ) => {

  const { id } = req.params
  const halqah = await Halqah.findById( id );
  res.status(200).json({
    status: 'success',
    data: { halqah },
  });
}); 


const updateHalqah = asyncHandler( async (req, res, next ) => {

  const { params: { id }, body } = req
  const halqah = await Halqah.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: { halqah },
  });
});


export { createHalqah, getAllHalaqaat, getHalqah, updateHalqah };
