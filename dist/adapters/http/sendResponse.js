"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resError = exports.resSuccess = void 0;
const resSuccess = (res, status, msj, recurso) => {
    return res.status(status).json({
        ok: true,
        msj,
        recurso
    });
};
exports.resSuccess = resSuccess;
const resError = (res, status, msj) => {
    return res.status(status).json({
        ok: false,
        msj
    });
};
exports.resError = resError;
