import express from 'express';
import {
  createHalqah,
  getAllHalaqaat,
  getHalqah,
} from '../controllers/halqahController.js';

const router = express.Router();

router.route('/').get(getAllHalaqaat).post(createHalqah);
router.route('/:id').get(getHalqah);

export default router;
