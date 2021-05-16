import express from 'express';

import { createEvent, getAllEvents, getEvent, updateEvent } from '../controllers/eventController.js';

const router = express.Router();

router.route('/').get(getAllEvents).post(createEvent);
router.route('/:id').get(getEvent).patch(updateEvent).post(updateEvent)

export default router;
