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
exports.UserRepo = void 0;
const pg_1 = require("../database/pg");
class UserRepo {
    constructor() {
        this.pgObject = pg_1.DatabaseConexion.Singleton().objConexion();
    }
    dataCuenta(idUser) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        select 
        id_usuario, 
        nombre_usuario, 
        apellido_usuario, 
        to_char(nacimiento_usuario, 'YYYY-MM-DD') as nacimiento_usuario,
        edad_usuario, 
        disponibilidad_usuario,
        fk_cuenta,
        id_cuenta,
        nombre_cuenta,
        email_cuenta, 
        contrasena_cuenta, 
        telefono_cuenta
        from USUARIOS AS US
        LEFT JOIN CUENTAS AS CS ON US.id_usuario = CS.id_cuenta
        WHERE id_usuario = $1;
        `;
            try {
                const dataQuery = yield ((_a = this.pgObject) === null || _a === void 0 ? void 0 : _a.query(query, [idUser]));
                return dataQuery;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.UserRepo = UserRepo;
