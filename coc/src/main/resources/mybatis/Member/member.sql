CREATE TABLE coc.USER (
                          seq BIGINT PRIMARY KEY AUTO_INCREMENT,
                          createdBy VARCHAR(20),
                          updatedBy VARCHAR(20),
                          createAt CHARACTER(19),
                          updateAt CHARACTER(19),
                          email VARCHAR(20) NOT NULL UNIQUE,
                          password VARCHAR(20) NOT NULL,
                          nickName VARCHAR(20) NOT NULL,
                          delYn CHAR(1) NOT NULL,
                          profileCont TEXT,
                          role VARCHAR(10)
);