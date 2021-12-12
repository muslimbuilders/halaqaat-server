import route from '../../common/route.js';
import { getUserDetails } from './userController.js';

const routes = [
  {
    path: '/user/details/:id',
    handler: getUserDetails,
    method: 'GET',
    auth: false,
  },
];

export default route(routes);
