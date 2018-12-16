#如果存在tedu数据库，删除数据库tedu
DROP DATABASE IF EXISTS tedu;
#创建数据库tedu
CREATE DATABASE tedu;
#使用数据库tedu
USE tedu;
#创建数据库表用于保存笔记本商品信息
CREATE TABLE laptop(
  id INT,              #integer编号
  title VARCHAR(128),  #variable character标题
  price INT,           #笔记本价格
  spec VARCHAR(32)     #笔记本的规格
);
