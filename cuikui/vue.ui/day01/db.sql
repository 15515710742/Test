#项目数据库脚本文件
#创建库web1806;
#注意:库名;表名;列名;英文数字全部小写
#进入web1806
#创建用户已表xz_user
#项目针对手机端(apple),要将utf8改为utf8mb4
SET NAMES UTF8;
DROP DATABASE IF EXISTS web1806;
CREATE DATABASE web1806 CHARSET=UTF8;
USE web1806;
CREATE TABLE xz_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upwd VARCHAR(32)
);
INSERT INTO xz_user VALUES(NULL,'tom',md5('123'));
INSERT INTO xz_user VALUES(NULL,'dongdong',md5('123'));
INSERT INTO xz_user VALUES(NULL,'jerry',md5('123'));

#功能一:登录(对数据库查询操作)
SELECT count(uid) as c FROM xz_user WHERE uname = 'tom' AND upwd = md5('123');
#图片轮播表 xz_imglist
#分析列 列类型
CREATE TABLE xz_imagelist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(50)
);
INSERT INTO xz_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner1.png','图片1');
INSERT INTO xz_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner2.png','图片2');
INSERT INTO xz_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner3.png','图片3');
INSERT INTO xz_imagelist VALUES(NULL,'http://127.0.0.1:3000/img/banner4.png','图片4');

#查询图片轮播所有数据
SELECT id,img_url,title FROM xz_imagelist;
#新闻表 id title ctime click img_url price
#货币要求不能出任何错误,(金融行业)
#为了提高数据健状性[添加冗余列;muid(修改数据用户编号);mtime(修改时间)]
CREATE TABLE xz_news(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    content VARCHAR(2000),
    click INT,
    img_url VARCHAR(255),   
    price DECIMAL(10,2),
    ctime DATETIME
);
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner5.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner5.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner5.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner1.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner2.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner3.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner4.png',0,now());
INSERT INTO xz_news VALUES(NULL,'123','123',0,'http://127.0.0.1:3000/banner5.png',0,now());









