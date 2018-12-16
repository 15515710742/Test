SET NAMES UTF8;
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;
CREATE TABLE dept(
  did TINYINT,
  dname VARCHAR(8),
  empCount TINYINT
);
INSERT INTO dept VALUES(10,'研发部',3);
INSERT INTO dept VALUES(20,'人事部',2);
INSERT INTO dept VALUES(30,'行政部',2);
CREATE TABLE emp(
  eid INT,
  ename VARCHAR(8),
  gender VARCHAR(1),
  birthday DATE,
  salary DECIMAL(7,2),
  deptld VARCHAR(8)
);
INSERT INTO emp VALUES(001,'张三','男','1992-02-15',8597.99,20);
INSERT INTO emp VALUES(007,'李四','女','1993-08-15',9999.99,30);
INSERT INTO emp VALUES(022,'王二','男','1996-02-20',8888.99,10);
INSERT INTO emp VALUES(023,'张龙','女','1994-01-20',8555.99,30);
INSERT INTO emp VALUES(024,'王虎','女','1998-02-10',9888.99,10);
SELECT * FROM emp;





