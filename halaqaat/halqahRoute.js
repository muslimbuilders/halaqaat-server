import express from 'express';
import route from '../core/common/route.js';
import {
  createHalqah,
  getAllHalaqaat,
  getHalqah,
  updateHalqah
} from './halqahController.js';


const routes = [{
  path: "/halqah", handler: getAllHalaqaat, method: 'GET', auth: true
},
{
  path: "/halqah", handler: createHalqah, method: 'POST', auth: true
},
{
  path: "/halqah/:id", handler: getHalqah, method: 'GET', auth: true
},
{
  path: "/halqah/:id", handler: updateHalqah, method: 'POST', auth: true
},
{
  path: "/halqah/:id", handler: updateHalqah, method: 'PATCH', auth: true
},
]
export default route(routes);
