import { Application, Router } from "express";
import userRouter from './user.routes';


export function apiRouter (app:Application){
       

    const apiRoute  = Router();
    app.use('/api/v1', apiRoute);    
    apiRoute.use('/user', userRouter);

}

