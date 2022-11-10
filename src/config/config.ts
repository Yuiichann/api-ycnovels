import dotenv from 'dotenv';

dotenv.config();

const MONGODB_USERNAME = process.env.MONGODB_USERNAME || '';
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || '';
const MONGPDB_URL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@mern-app.lj6p0.mongodb.net/?retryWrites=true&w=majority`;

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 5000;

export const config = {
  mongo: {
    url: MONGPDB_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};
