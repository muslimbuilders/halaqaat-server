import express from 'express';
import {
  createHalqah,
  getAllHalaqaat,
  getHalqah,
  updateHalqah
} from '../controllers/halqahController.js';

const router = express.Router();

router.route('/').get(getAllHalaqaat).post(createHalqah);
router.route('/:id').get(getHalqah).put(updateHalqah).post(updateHalqah);

export default router;
