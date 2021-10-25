import express from 'express';
import {
  createHalqah,
  getAllHalaqaat,
  getHalqah,
  updateHalqah
} from './authController.js';

const router = express.Router();

router.route('/').get(getAllHalaqaat).post(createHalqah);
router.route('/:id').get(getHalqah).patch(updateHalqah).post(updateHalqah);

export default router;
