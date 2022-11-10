import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
  .then(() => {
    console.log('Connected Successfully');
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(config.server.port, () => {
  console.log(`App start at PORT ${config.server.port}`);
});
