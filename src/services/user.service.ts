import { UserInterface } from "../models/interface/user.interface";
import { UserRepo } from "../repositories/user.repositorie";
export class UserServices {

    
    private objCuenta!: UserRepo;

    constructor() {
        this.objCuenta = new UserRepo;
    }


    public async getUser(idUser:number) {

       try{

            const dataUser = await this.objCuenta.dataCuenta(idUser);

            if(dataUser?.rowCount === 0){
                return {
                    ok:false,
                    status: 403, 
                    data: null, 
                    msj: "sin datos"
                }
            }

            const data:UserInterface = dataUser?.rows[0];


            return {

                ok:true,
                status: 200,
                data: data, 
                msj: 'datos de usuario'
            }
            return;

       }catch(err:any){

           throw new Error(err);

       }
    
    }

}