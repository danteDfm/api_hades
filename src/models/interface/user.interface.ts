export interface UserInterface{
    id_usuario: string,
    nombre_usuario: string,
    apellido_usuario: string,
    nacimiento_usuario: Date,
    edad_usuario: number,
    disponibilidad_usuario: boolean,
    fk_cuenta: number,
    id_cuenta: string,
    nombre_cuenta: string,
    email_cuenta: string,
    contrasena_cuenta: string,
    telefono_cuenta: string
}