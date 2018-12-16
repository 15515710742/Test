#客户端UTF8编码
SET NAMES UTF8;
#放弃数据库jd，如果存在
DROP DATABASE IF EXISTS jd;
#创建数据库jd，编码类型为utf8
CREATE DATABASE jd CHARSET=UTF8;
#使用jd
USE jd;
#创建数据库表格user
CREATE TABLE user(
 uid PRIMARY KEY,
 uname VARCHAR(16) UNIQUE
);
#插入数据
INSERT INTO user VALUES





