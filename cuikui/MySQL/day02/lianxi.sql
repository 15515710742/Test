#设置客户端编码为UTF8
SET NAMES UTF8;
#放弃数据库xuezi,如果存在
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi,编码类型为UTF8
CREATE DATABASE xuezi CHARSET=UTF8;
#使用数据库xuezi
USE xuezi;
#创建数据库表格xz_laptop_family
CREATE TABLE xz_laptop_family(
  fid SMALLINT PRIMARY KEY,
  fname VARCHAR(32),
  laptopCount SMALLINT #laptopCount SMALLINT DEFAULT
);
#插入数据
INSERT INTO xz_laptop_family VALUES(10,'联想',3);
#INSERT INTO xz_laptop_family VALUES(10,'联想',DEFAULT);
INSERT INTO xz_laptop_family VALUES(20,'戴尔',2);
INSERT INTO xz_laptop_family VALUES(30,'小米',2);
#创建笔记本信息表xz_laptop
CREATE TABLE xz_laptop(
  lid INT PRIMARY KEY,
  title VARCHAR(128) NOT NULL,
  price DECIMAL(9,2),
  spec VARCHAR(128),
  details VARCHAR(2048),
  shelfTime BIGINT,#所存的是距离1970年1月1日的毫秒
  isOnsale BOOL,
  familyid SMALLINT,
  FOREIGN KEY(familyid) REFERENCES xz_laptop_family(fid)
);
#插入数据
INSERT INTO xz_laptop VALUES(1001,'aaaa',7899.99,'20英寸win7系统2G内存','性能高,反应快','2018-01-01',0,10);
INSERT INTO xz_laptop VALUES(1002,'bbbb',7999.99,'15英寸win8系统3G内存','性能高,反应快','2018-01-02',1,20);
INSERT INTO xz_laptop VALUES(1003,'cccc',8899.99,'17英寸win8系统4G内存','性能高,反应快','2018-01-05',1,30);
INSERT INTO xz_laptop VALUES(1004,'dddd',7889.99,'15英寸win7系统2G内存','性能高,反应快','2018-01-10',0,30);
INSERT INTO xz_laptop VALUES(1005,'eeee',7899.88,'20英寸win8系统3G内存','性能高,反应快','2018-02-10',1,30);
INSERT INTO xz_laptop VALUES(1006,'ffff',8899.99,'21英寸win8系统2G内存','性能高,反应快','2018-01-15',0,20);
INSERT INTO xz_laptop VALUES(1007,'aaaa',7890.99,'15英寸win7系统2G内存','性能高,反应快','2018-01-30',1,10);
#检查数据库
SELECT * FROM xz_laptop;
SELECT * FROM xz_laptop_family;


