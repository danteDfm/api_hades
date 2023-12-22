"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const sendResponse_1 = require("../adapters/http/sendResponse");
const objServices = new user_service_1.UserServices;
class UserController {
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { idUser } = req.params;
                const idFormat = parseInt(idUser);
                const resService = yield objServices.getUser(idFormat);
                return (0, sendResponse_1.resSuccess)(res, resService.status, resService.msj, resService === null || resService === void 0 ? void 0 : resService.data);
            }
            catch (err) {
                return (0, sendResponse_1.resError)(res, 500, 'Error interno del servidor');
            }
        });
    }
}
exports.UserController = UserController;
