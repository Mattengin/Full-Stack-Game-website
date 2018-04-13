DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  id int(11) NOT NULL AUTO_INCREMENT,
  firstname varchar(60) DEFAULT NULL,
  lastname varchar(60) DEFAULT NULL,
  email varchar(80) NOT NULL,
  password varchar(256) NOT NULL,
  handle varchar(70) NOT NULL,
  _created datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
); 