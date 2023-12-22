export const config = {

    PORT: parseInt( process.env.PORT! ) ||  3001

}

export const configDatabase = {

    user: process.env.USER!,
    host: process.env.HOST!,
    database: process.env.DB!,
    password: process.env.PASS!,
    port: parseInt(process.env.PORT_PG!),
}