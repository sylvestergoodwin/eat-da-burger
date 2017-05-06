CREATE DATABASE BURGERS_DB;

CREATE TABLE BURGERS_DB.BURGERS
(ID             INTEGER      NOT NULL   AUTO_INCREMENT,
 BURGER_NAME    VARCHAR(30)  NOT NULL,
 DEVOURED       BOOLEAN      NOT NULL   DEFAULT FALSE,
 DATE           TIMESTAMP    NOT NULL   DEFAULT now(),
 PRIMARY KEY (ID)
);