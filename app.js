import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors';
import halqahRoute from './halaqaat/halqahRoute.js';
import eventRoute from './events/eventRoute.js';
import authRoutes from './auth/authRoute.js';
import { errorHandler } from './core/common/errorHandler/errorHandler.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('combined'))
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

//Use Morgan dev

app.get('/', (req, res) => {
  res.send('Hey You, Server is running');
});
app.use('/api/v1', [authRoutes, halqahRoute, eventRoute]);
app.use(errorHandler);
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'Failed',
    message: `Can't find ${req.originalUrl} on this server `,
  });
});

export default app;
