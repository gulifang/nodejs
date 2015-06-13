var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
});
connection.connect();
var Array=["name","age"];
var username="zs";
var sql="select ?? from student where name=?";
connection.query(sql,[Array,username],function(err,rows,fields){
    if(err){
        console.log(err);
    }else{
        console.log(rows);
    }
    connection.end();
});