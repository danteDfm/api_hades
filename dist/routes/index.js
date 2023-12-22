"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
function apiRouter(app) {
    const apiRoute = (0, express_1.Router)();
    app.use('/api/v1', apiRoute);
    apiRoute.use('/user', user_routes_1.default);
}
exports.apiRouter = apiRouter;
