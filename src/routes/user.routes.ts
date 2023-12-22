import {  Router } from "express";
const router = Router();
import { UserController } from "../controllers/user.controller";

router.post('/data/:idUser',  UserController.getUser);


export default router;