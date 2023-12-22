//configuracion del servidor

import express, {Application} from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import {apiRouter} from "./routes/index";

import { config, configDatabase } from "./config/configuraciones";
import { DatabaseConexion } from "./database/pg";
class Server{

    private PORT:number; 
    private app:Application;

    public constructor(){

        this.PORT = config.PORT;
        this.app = express();

        this.dbsConexion();
        this.middlewares();
        this.routes();
        this.puerto();
    }

    public async dbsConexion(){

       try{
    
            const objSingleton =DatabaseConexion.Singleton();
            await objSingleton.conexion();
            
       }catch(err:any){
            console.log(err);
            return;
       }

    }
    public middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    public routes(){
        apiRouter(this.app);
    }

    public puerto(){
        this.app.listen(this.PORT, ()=>{
            console.log(`http://localhost:${this.PORT}`);
        });
    }
}

export default Server;