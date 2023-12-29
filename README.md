# Challenge-of-Champion

#db (local) 테이블 생성 쿼리

CREATE TABLE coc.TEST (
    seq INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(20),
    cont VARCHAR(100),
    userName VARCHAR(20),
    createdAt CHARACTER(19),
    updatedAt CHARACTER(19),
    delYn CHARACTER(1)
);


SELECT * FROM coc.TEST t ;

INSERT INTO coc.TEST (title, cont, userName) values( 'test', 'this is test', 'jaeguin');
