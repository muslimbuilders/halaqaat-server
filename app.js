import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { errorHandler } from './utils/errorHandler.js';
import cors from 'cors';
import halqahRoute from './routes/halqahRoute.js';
import eventRoute from './routes/eventRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

//Use Morgan dev

app.get('/', (req, res) => {
  res.send('Hey You, Server is running');
});
app.use('/api/v1/halqah', halqahRoute);
app.use('/api/v1/events', eventRoute);
app.use(errorHandler);
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'Failed',
    message: `Can't find ${req.originalUrl} on this server `,
  });
});

export default app;
