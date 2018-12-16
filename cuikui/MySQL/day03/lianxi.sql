#1
SELECT ename,salary,birthday FROM emp;
SELECT deptId,ename,salary,eid FROM emp;
#2
SELECT * FROM emp;
#3
SELECT ename AS 姓名,salary AS 工资 FROM emp;
#4
SELECT DISTINCT deptId FROM emp;
SELECT DISTINCT sex FROM emp;
#5
SELECT 2*3/4 AS 结果;
SELECT ename AS 姓名,salary*12 AS 年薪 FROM emp;
SELECT (salary+500)*12+5000 AS 年薪 FROM emp;
#6
SELECT * FROM emp ORDER BY salary ASC;
SELECT * FROM emp ORDER BY birthday DESC;
SELECT * FROM emp ORDER BY ename ASC;
SELECT * FROM emp ORDER BY birthday DESC,ename ASC;
SELECT * FROM emp ORDER BY sex ASC,salary ASC;
#7
SELECT * FROM emp WHERE eid=5;
SELECT eid,salary,birthday FROM emp WHERE ename='KING';
SELECT * FROM emp WHERE deptId=20;
SELECT * FROM emp WHERE sex=1;
SELECT * FROM emp WHERE salary>=5000;
SELECT * FROM emp WHERE birthday>'1991-1-1';
SELECT * FROM emp WHERE deptId!=10;
SELECT * FROM emp WHERE deptId IS NULL;
SELECT * FROM emp WHERE deptId IS NOT NULL;
SELECT * DEOM emp WHERE salary>=6000 AND sex=0 AND birthday>'1991-1-1';
SELECT * FROM emp WHERE salary BETWEEN 5000 AND 5999;
SELECT * FROM emp WHERE salary<4000 OR salary>8000;
SELECT * FROM emp WHERE birthday>='1991-1-1' AND birthday<='1991-12-31';
SELECT * FROM emp WHERE birthday<'1990-1-1' OR birthday>'1993-12-31';
SELECT * FROM emp WHERE deptId=10 OR deptId=30;
SELECT * FROM emp WHERE deptId IN(10,30);
SELECT * FROM emp WHERE deptId IN(10,30,50,80);
SELECT * FROM emp WHERE deptId=10 OR deptId=30 OR deptId=50 OR deptId=80;
SELECT * FROM emp WHERE deptId NOT IN(10,30);
#8
SELECT * FROM emp WHERE ename LIKE '%e%';
SELECT * FROM emp WHERE ename LIKE 'e%';
SELECT * FROM emp WHERE ename LIKE '%e_';















