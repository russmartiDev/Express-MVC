class Config
{
    constructor()
    {
        this.serverPort = "5000"; //sever port
        this.dbconf = //database config
        {
            host: "localhost",
            user: "root",
            password: "1234",
            database: "express2",
            port: 3306
        };
        this.session = true;
    }
}
module.exports = new Config();