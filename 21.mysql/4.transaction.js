var mysql=require("mysql");
/**
 * 事务 ACID
 * 原子性 Atomic
 * 一致性 Consistency
 * 隔离性 Isolation
 * 持久性 Durability
 */
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
connection.beginTransaction(function(err){
    if(err) throw new Error(err);
    connection.query("update account set mny=0 where id=1",function(err){
        if(err){
            connection.rollback(function(){
                throw err;
            });
            throw err;
        }
        connection.query("update account1 set mny=200 where id=1",function(err){
            if(err){
                connection.rollback(function(){
                    throw err;
                });
                throw err;
            }
        });
        connection.commit(function(err){
            if(err){
                connection.rollback(function(){
                    throw err;
                });
                throw err;
            }else{
                console.log("成功啦");
            }
        });
    });
});