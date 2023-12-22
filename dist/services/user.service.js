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
exports.UserServices = void 0;
const user_repositorie_1 = require("../repositories/user.repositorie");
class UserServices {
    constructor() {
        this.objCuenta = new user_repositorie_1.UserRepo;
    }
    getUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataUser = yield this.objCuenta.dataCuenta(idUser);
                if ((dataUser === null || dataUser === void 0 ? void 0 : dataUser.rowCount) === 0) {
                    return {
                        ok: false,
                        status: 403,
                        data: null,
                        msj: "sin datos"
                    };
                }
                const data = dataUser === null || dataUser === void 0 ? void 0 : dataUser.rows[0];
                return {
                    ok: true,
                    status: 200,
                    data: data,
                    msj: 'datos de usuario'
                };
                return;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.UserServices = UserServices;
