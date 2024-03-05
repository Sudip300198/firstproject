const{ request } = require("express")
const mysql = require("mysql")
const express = require("express")
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/assets",express.static("assets"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"root",
    database:"CGTCLOGINPAGE"
});

connection.connect(function (error) {
    if (error) throw error
    else console.log("conneted to datbase")
})

app.get("/",function (req,res){
    res.sendFile(__dirname + "/login.html");

})


app.post("/", encoder, function (req,res){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("select * from loginuser where user_name = ? and user_pass =?",[username,password], function(error,result,fields) {
        if (result.length > 0) {
            res.redirect("/welcome");
        }
        else{
            res.redirect("/");
        }
    })

    app.get("/welcome", function (req,res){
        res.sendFile(__dirname + "/welcome.html")
    })

})

app.listen(4000);