import { Request, Response } from "express";
import { UserServices } from "../services/user.service";
import { resError, resSuccess } from "../adapters/http/sendResponse";


const objServices = new UserServices;

export class UserController {

     public static async getUser(req: Request, res: Response) {

          try {

               let { idUser } = req.params;
               const idFormat = parseInt(idUser);
               const resService = await objServices.getUser(idFormat);
               return resSuccess(res, resService!.status, resService!.msj, resService?.data);
               
          } catch (err: any) {
               return resError(res, 500, 'Error interno del servidor');
          }


     }

}