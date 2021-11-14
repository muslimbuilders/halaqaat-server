import mongoose from 'mongoose';
import app from './app.js';
import envs from './config/env.js'

mongoose
  .connect(envs.dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB Connection successful');
  });

const server = app.listen(envs.port, () => {
  console.log(`App running on PORT https://localhost:${envs.port}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

export default app;