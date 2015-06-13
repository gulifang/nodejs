var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
    queryFormat:function(query,values){
        if(!values) return query;
        return query.replace(/\:(\w+)/g,function(text,key){
            if(values.hasOwnProperty(key)){
                return this.escape(values[key]);//escape把特殊字符转换掉
            }
            return text;
        }.bind(this));

    }
});
connection.connect();
var sql="select * from student where name=:name and name=:name and age=:age";
connection.query(sql,{name:"zs",age:21},function(err,rows,fields){
    if(err){
        console.log(err);
    }else{
        console.log(rows);
    }
    connection.end();
});