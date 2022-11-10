"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
// mongoose
//   .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
//   .then(() => {
//     console.log('Connected Successfully');
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(config_1.config.server.port, () => {
    console.log(`App start at PORT ${config_1.config.server.port}`);
});
