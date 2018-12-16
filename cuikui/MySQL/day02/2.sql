#设置客户端编码utf8
SET NAMES UTF8;
#如果存在数据库xuezi，放弃数据库xuezi
DROP DATABASE IF EXISTS xuezi;
#创建数据库xuezi，指定服务器端编码格式为UTF8
CREATE DATABASE xuezi CHARSET=UTF8;
#进入数据库xuezi
USE xuezi;
#创建数据库表格laptop
CREATE TABLE laptop(
  lid BIGINT,#商品编码
  image VARCHAR(32),#商品图片
  title VARCHAR(128),#标题
  price DECIMAL(9,2),#价格
  stockCount SMALLINT,#库存量
  shelfTime DATE,#上架时间
  islndex BOOL
);
#往laptop中插入数据
INSERT INTO laptop VALUES('1','12.jpg','联想笔记本','5999.99','1000','2018-1-15','1');
INSERT INTO laptop VALUES('2','30.jpg','苹果笔记本','9999.99','5000','2018-1-20','0');
INSERT INTO laptop VALUES('3','10.jpg','华硕笔记本','4999.99','5000','2018-1-10','1');
#检查数据表格laptop
SELECT * FROM laptop ;













