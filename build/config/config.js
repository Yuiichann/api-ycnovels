"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_USERNAME = process.env.MONGODB_USERNAME || '';
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || '';
const MONGPDB_URL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@mern-app.lj6p0.mongodb.net/?retryWrites=true&w=majority`;
const SERVER_PORT = process.env.SERVER_PORT
    ? Number(process.env.SERVER_PORT)
    : 5000;
exports.config = {
    mongo: {
        url: MONGPDB_URL,
    },
    server: {
        port: SERVER_PORT,
    },
};
