import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import cors from "cors";
import  halqahRoute from './routes/halqahRoute.js'
import eventRoute from './routes/eventRoute.js'

const app = express()


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

//Use Morgan dev
if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'))
}
app.get('/', (req, res)=> {
  res.send('Hey You, Server is running')
})
app.use('/api/v1/halqah', halqahRoute);
app.use("/api/v1/events", eventRoute);
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "Failed",
    message: `Can't find ${req.originalUrl} on this server `,
  });
});



export default app;
