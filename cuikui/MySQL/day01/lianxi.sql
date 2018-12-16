#如果存在数据库xuezi，放弃数据库xuezi
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi
CREATE DATABASE xuezi;
#进入数据库xuezi
USE xuezi;
#创建数据表
CREATE TABLE user(
  uid INT,
  uname VARCHAR(16),
  upwd VARCHAR(16),
  email VARCHAR(32),
  phone	CHAR(11),
  gender VARCHAR(11),
  userName VARCHAR(8),
  registerTime VARCHAR(10),
  isOnline VARCHAR(1)
);
#往user表中插入数据
INSERT INTO user VALUES('3','A','012','123456@qq.com','15188283671','M','Li','1992-1-1','N');
INSERT INTO user VALUES('9','B','123','223456@qq.com','15188283672','F','La','1992-1-2','Y');
INSERT INTO user VALUES('8','C','234','323456@qq.com','15188283673','M','Lb','1992-1-3','N');
INSERT INTO user VALUES('7','D','345','423456@qq.com','15188283674','F','Lc','1992-1-4','Y');
INSERT INTO user VALUES('6','E','456','523456@qq.com','15188283675','M','Le','1992-1-5','N');
INSERT INTO user VALUES('5','F','567','623456@qq.com','15188283676','F','Ld','1992-1-6','Y');
#从数据表中删除数据
DELETE FROM user WHERE uid='9';
DELETE FROM user WHERE phone='15188283671';
#更改记录
UPDATE user SET uname='AABB',phone='123456789' WHERE uid='6';
#查询数据库表中user所有的记录行
SELECT * FROM user;






