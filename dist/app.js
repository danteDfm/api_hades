"use strict";
//configuracion del servidor
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
const index_1 = require("./routes/index");
const configuraciones_1 = require("./config/configuraciones");
const pg_1 = require("./database/pg");
class Server {
    constructor() {
        this.PORT = configuraciones_1.config.PORT;
        this.app = (0, express_1.default)();
        this.dbsConexion();
        this.middlewares();
        this.routes();
        this.puerto();
    }
    dbsConexion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objSingleton = pg_1.DatabaseConexion.Singleton();
                yield objSingleton.conexion();
            }
            catch (err) {
                console.log(err);
                return;
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
    }
    routes() {
        (0, index_1.apiRouter)(this.app);
    }
    puerto() {
        this.app.listen(this.PORT, () => {
            console.log(`http://localhost:${this.PORT}`);
        });
    }
}
exports.default = Server;
