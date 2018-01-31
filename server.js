var mysql = require('mysql');
var express    = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'NAZIKKOVAL123n',
    database: "cloud_life"
});

//CREATE SCHEMA 
/*
var Create_shema = "CREATE SCHEMA IF NOT EXISTS `cloud_life` DEFAULT CHARACTER SET utf8;";

connection.query(Create_shema, function (err, result) {
    if (err) throw err;
    console.log("Database created");
});

var Table_users = "CREATE TABLE IF NOT EXISTS `cloud_life`.`users` ( `iduser` INT(11) NOT NULL AUTO_INCREMENT, `name` VARCHAR(45) NULL DEFAULT NULL, `sname` VARCHAR(45) NULL DEFAULT NULL, `age` INT(11) NULL DEFAULT NULL,  `email` VARCHAR(45) NULL DEFAULT NULL, `password` VARCHAR(25) NULL DEFAULT NULL, PRIMARY KEY (`iduser`)) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;";

connection.query(Table_users, function (err, result) {
    if (err) throw err;
    console.log("Table `users` created");
});


*/


app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    var user = {
        name: req.body.user_name,
        email: req.body.email,
        age: req.body.age,
        sname: req.body.user_sname,
        password: req.body.password
    };
    
    connection.query('insert into users SET ?', user, (err) => {
        if(err) throw err;
        console.log('register success', req.body);
    });
    res.send(200);
});



app.post('/login', (req, res) => {
    var log_email = req.body.log_email;
    var log_password = req.body.log_password;
    
    connection.query('select * from users where email = ?', [log_email], (err, rows) => {
        if(err) throw err;
        console.log(rows);
        res.send(rows);
    });
    
});
    





var server = app.listen(3000, (err) => {
    if(err) throw err;
    console.log("Server start on port 3000");
});