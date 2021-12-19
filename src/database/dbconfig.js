module.exports = {
    HOST: "localhost",
    USER: "edson_siscaja",
    PASSWORD: "",
    DB: "development_db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}