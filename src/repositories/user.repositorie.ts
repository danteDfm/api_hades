import { Client } from "pg";
import { DatabaseConexion } from "../database/pg";
import { UserInterface } from "../models/interface/user.interface";
export class UserRepo{

    pgObject!:Client  | undefined;
    constructor(){  

        this.pgObject = DatabaseConexion.Singleton().objConexion();
    }

    public async dataCuenta(idUser:number){

        const query: string = `
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


            const dataQuery = await this.pgObject?.query(query, [idUser]);

            return dataQuery;

         

        } catch (err: any) {

            throw new Error(err);

        }

    }


}