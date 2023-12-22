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
exports.DatabaseConexion = void 0;
const pg_1 = require("pg");
const configuraciones_1 = require("../config/configuraciones");
class DatabaseConexion {
    constructor(configDatabase) {
        this.configDatabase = configDatabase;
        this.pgObject = new pg_1.Client(this.configDatabase);
    }
    static Singleton() {
        if (!DatabaseConexion.objSingleton) {
            DatabaseConexion.objSingleton = new DatabaseConexion(configuraciones_1.configDatabase);
        }
        return DatabaseConexion.objSingleton;
    }
    conexion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.pgObject) {
                    throw new Error("Objecto vacio");
                }
                yield this.pgObject.connect();
                console.log("CONEXION A LA BASE DE DATOS REALIZADA");
                return;
            }
            catch (err) {
                console.log("CONEXION ERRONEA --> " + err);
            }
        });
    }
    objConexion() {
        try {
            if (!this.pgObject) {
                throw new Error("Objecto vacio");
            }
            return this.pgObject;
        }
        catch (err) {
            console.log("Error al devolver el objeto -->" + err);
        }
    }
}
exports.DatabaseConexion = DatabaseConexion;
