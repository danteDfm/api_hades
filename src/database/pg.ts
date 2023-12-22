import { Client } from "pg";
import { configDatabase } from "../config/configuraciones";

interface ConfigDatabase{
    
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
}

export class DatabaseConexion{

    private pgObject:Client;
    private configDatabase?:ConfigDatabase;
    public static objSingleton:DatabaseConexion;

    private constructor(configDatabase?:ConfigDatabase){

        this.configDatabase = configDatabase;
        this.pgObject = new Client(this.configDatabase);
        
    }


    public static Singleton(){

        if(!DatabaseConexion.objSingleton){

            DatabaseConexion.objSingleton = new DatabaseConexion(configDatabase);
        }
        return DatabaseConexion.objSingleton;
    }


    async conexion(){

        try{

            if(!this.pgObject){

                throw new Error("Objecto vacio");
            }

           await this.pgObject.connect();
      
            console.log("CONEXION A LA BASE DE DATOS REALIZADA");
            return;

        }catch(err:any){

            console.log("CONEXION ERRONEA --> " + err);
        }
    }

    objConexion(){

      try{

        if(!this.pgObject){

            throw new Error("Objecto vacio");
        }

        return this.pgObject;

      }catch(err:any){

        console.log("Error al devolver el objeto -->" + err);

      }
    }


}