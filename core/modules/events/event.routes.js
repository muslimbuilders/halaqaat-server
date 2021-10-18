import express from 'express';

import { createEvent, getAllEvents, getEvent } from './event.controller.js';

const router = express.Router();

const baseUrl = "events";

router.get(`/${baseUrl}`, getAllEvents);
router.post(`/${baseUrl}`, createEvent);
router.get(`/${baseUrl}/:id`, getEvent);

export default router;
