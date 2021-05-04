import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT;

const DB = process.env.DATABASE_URL;
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection successful');
  });

const server = app.listen(PORT, () => {
  console.log(`App running on PORT https://localhost:${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

export default app;