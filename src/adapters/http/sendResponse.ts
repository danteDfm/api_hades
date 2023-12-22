import { Response } from "express";

export const resSuccess = (res: Response, status: number, msj: string, recurso: any) => {
    return res.status(status).json({
        ok: true,
        msj,
        recurso
    });
}

export const resError = (res: Response, status: number, msj: string) => {

    return res.status(status).json({
        ok: false,
        msj
    });
}