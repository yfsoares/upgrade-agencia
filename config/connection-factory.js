const mysql = require('mysql2');

module.exports = function(){
    return mysql.createConnection({
       host: "",
        user: "",
        password: "",
        database: "",
        port: ""
    });

};
