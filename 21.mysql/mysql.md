#介绍
多用户  搭建多重服务器
多线程
用的SQL语言
#组成
服务器  是由一个服务器守护程序mysqld
客户端
#特点
免费  开源 速度快

#用法
show databases;  有多少数据库

create database 名 创建数据库
drop database 名 删除数据库
use blog2 链接数据库
create table person(name varchar(32),age int);
#查询
select columnlist 列名
from table_list 那些表获取数据
where condition 过滤数据的条件
group by grouping 分组条件
having condition 对分组结果进行过滤
start limit 对结果进行限定
#查询需求如下
1条件 以年龄为基数
2按home 分组
3查询  分数最高 并且大于80分
4只返回一条数据

select home,max(score)
from person
where age%2=1
group by home
having max(score)>80
limit 1

select * from person 查询
insert into person(name,age) values("zhangsan","3");插入



#启动mongodb
mongod -dbpath "C:\Program Files\MongoDB 2.6 Standard\data\db"
然后去bin里边打开mongo.exe