var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
});
connection.connect();
var username="zs";
var sql="select * from student where name='"+username+"'";
connection.query(sql,function(err,rows,fields){
    if(err){
        console.log(err);
    }else{
        console.log(rows);
    }
    connection.end();
});