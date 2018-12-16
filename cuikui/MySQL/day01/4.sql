#如果存在数据库tedu，放弃数据库tedu
DROP DATABASE IF EXISTS tedu;
#创建数据库tedu
CREATE DATABASE tedu;
#进入数据库tedu
USE tedu;
#创建数据表
CREATE TABLE student(
  sid INT,
  name VARCHAR(8),
  gender VARCHAR(2),
  score INT
);
#往student表中插入数据
INSERT INTO student VALUES('10','Tom','M','100');
INSERT INTO student VALUES('15','Jerry','F','85');
INSERT INTO student VALUES('10','Li','M','98');
INSERT INTO student VALUES('12','Mi','F','90');
INSERT INTO student VALUES('10','CK','M','100');
INSERT INTO student VALUES('11','CH','M','99');
#从数据表中删除数据
DELETE FROM student WHERE sid='12';

#查询数据库表中student所有的记录行
SELECT * FROM student;



