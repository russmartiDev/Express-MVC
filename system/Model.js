class Model
{
    constructor()
    {
        let dbconf = require("../config/config").dbconf;
        this.md5 = require("md5");
        this.validation = require("../library/Validation");
        this.Mysql = require('mysql2');
        this.connection = this.Mysql.createConnection(dbconf);
        this.connection.connect(function(err) {
            if (err) throw err;
        });
       

    }

    query = async function(query_string = "", data = [])
    {
        let query_format = this.Mysql.format(query_string, data);
        let data_result = [];
        await this.connection.promise().query(query_format).then(function([result])
        {
            data_result =  result;
        });
        return data_result;
    }

    
}

module.exports = Model;