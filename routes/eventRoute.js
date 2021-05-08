import express from 'express';

import { createEvent, getAllEvents, getEvent } from '../controllers/eventController.js';

const router = express.Router();

router.route('/').get(getAllEvents).post(createEvent);
router.route('/:id').get(getEvent)

export default router;
