import route from '../../common/route.js';

import { createEvent, getAllEvents, getEvent } from './eventController.js';


const routes = [{
  path: "/events", handler: getAllEvents, method: 'GET', auth: true
},
{
  path: "/events", handler: createEvent, method: 'POST', auth: true
},
{
  path: "/events/:id", handler: getEvent, method: 'GET', auth: true
},
]
export default route(routes);
