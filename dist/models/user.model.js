"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuenta = void 0;
const pg_1 = require("../database/pg");
class User {
    constructor(nombreUsuario, apellidoUsuario, nacimientoUsuario, edadUsuario, disponibilidadUsuario, fkCuenta) {
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.nacimientoUsuario = nacimientoUsuario;
        this.edadUsuario = edadUsuario;
        this.disponibilidadUsuario = disponibilidadUsuario;
        this.fkCuenta = fkCuenta;
    }
    //metodos accesores setters
    set setNombreUsuario(nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }
    ;
    set setApellidoUsuario(ApellidoUsuario) {
        this.apellidoUsuario = this.apellidoUsuario;
    }
    ;
    set setNacimientoUsuario(fechaNacimientoUsuario) {
        this.nacimientoUsuario = fechaNacimientoUsuario;
    }
    ;
    set setEdadUsuario(edadUsuario) {
        this.edadUsuario = edadUsuario;
    }
    ;
    set setDisponibilidadUsuario(disponibilidadUsuario) {
        this.disponibilidadUsuario = disponibilidadUsuario;
    }
    ;
    set setFkCuenta(fkCuenta) {
        this.fkCuenta = fkCuenta;
    }
    ;
    //metodos accesores geters
    get getNombreUsuario() {
        return this.nombreUsuario;
    }
    ;
    get getApellidoUsuario() {
        return this.apellidoUsuario;
    }
    ;
    get getNacimientoUsuario() {
        return this.nacimientoUsuario;
    }
    ;
    get getEdadUsuario() {
        return this.edadUsuario;
    }
    ;
    get getDisponibilidadUsuario() {
        return this.disponibilidadUsuario;
    }
    ;
    get getFkCuenta() {
        return this.fkCuenta;
    }
    ;
    //acceso a todos los atributos
    getDataUser() {
        const { nombreUsuario, apellidoUsuario, nacimientoUsuario, edadUsuario, disponibilidadUsuario, fkCuenta } = this;
        return {
            nombreUsuario,
            apellidoUsuario,
            nacimientoUsuario,
            edadUsuario,
            disponibilidadUsuario,
            fkCuenta
        };
    }
}
class Cuenta extends User {
    constructor(nombreCuenta, emailCuenta, contrasenaCuenta, telefonoCuenta, nombreUsuario, apellidoUsuario, nacimientoUsuario, edadUsuario, disponibilidadUsuario, fkCuenta) {
        super(nombreUsuario, apellidoUsuario, nacimientoUsuario, edadUsuario, disponibilidadUsuario, fkCuenta);
        this.nombreCuenta = nombreCuenta;
        this.emailCuenta = emailCuenta;
        this.contrasenaCuenta = contrasenaCuenta;
        this.telefonoCuenta = telefonoCuenta;
        this.pgObject = pg_1.DatabaseConexion.Singleton().objConexion();
    }
    //metodos accesores get 
    get getNombreCuenta() {
        return this.nombreCuenta;
    }
    get getEmailCuenta() {
        return this.emailCuenta;
    }
    get getContrasenaCuenta() {
        return this.contrasenaCuenta;
    }
    get getTelefonoCuenta() {
        return this.telefonoCuenta;
    }
    //metodos accesores set
    set settNombreCuenta(nombreCuenta) {
        this.nombreCuenta = nombreCuenta;
    }
    set setEmailCuenta(emailCuenta) {
        this.emailCuenta = emailCuenta;
    }
    set setContrasenaCuenta(contrasenaCuenta) {
        this.contrasenaCuenta = contrasenaCuenta;
    }
    set setTelefonoCuenta(telefonoCuenta) {
        this.telefonoCuenta = telefonoCuenta;
    }
    //acceso objeto todos los atributos
    getDataCuenta() {
        const { nombreCuenta, emailCuenta, contrasenaCuenta, telefonoCuenta } = this;
        return {
            nombreCuenta,
            emailCuenta,
            contrasenaCuenta,
            telefonoCuenta
        };
    }
}
exports.Cuenta = Cuenta;
