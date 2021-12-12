import route from '../../common/route.js';

import { createEvent, getAllEvents, getEvent } from './eventController.js';

const routes = [
  {
    path: '/events',
    handler: getAllEvents,
    method: 'GET',
    auth: true,
  },
  {
    path: '/events/new/:id',
    handler: createEvent,
    method: 'POST',
    auth: false,
  },
  {
    path: '/events/:id',
    handler: getEvent,
    method: 'GET',
    auth: true,
  },
];
export default route(routes);
