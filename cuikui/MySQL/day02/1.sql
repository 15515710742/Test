#设置客户端编码为utf8
SET NAMES UTF8;
#如果存在数据库dangdang，放弃数据库dangdang
DROP DATABASE IF EXISTS dangdang;
#创建数据库dangdang，指定服务器端编码类型为utf8
CREATE DATABASE dangdang CHARSET=UTF8;
#进入数据库dangdang
USE dangdang;
#创建数据库表格book
CREATE TABLE book(
  bid INT,
  bname VARCHAR(32),
  author VARCHAR(8),
  price VARCHAR(10),
  pubDate VARCHAR(16),
  isAddsale VARCHAR(1)
);
#往book中插入数据
INSERT INTO book VALUES('1','三国演义','罗惯中','199.99','2018-02-01','Y');
INSERT INTO book VALUES('2','水浒传','施耐庵','199.88','2018-02-12','Y');
INSERT INTO book VALUES('3','西游记','吴承恩','200.99','2018-02-20','N');
INSERT INTO book VALUES('4','红楼梦','曹雪芹','199.89','2018-02-18','N');
#删除数据表中的数据
DELETE FROM book WHERE bid='2';

UPDATE book SET bname='孙悟空' WHERE bid='3';
SELECT * FROM book;



