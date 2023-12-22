"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configDatabase = exports.config = void 0;
exports.config = {
    PORT: parseInt(process.env.PORT) || 3001
};
exports.configDatabase = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.PASS,
    port: parseInt(process.env.PORT_PG),
};
