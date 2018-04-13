DROP TABLE IF EXISTS PlatformFamily;

CREATE TABLE PlatformFamily (
	id int not null auto_increment primary key,
    companyName varchar(75) not null,
    _created datetime default current_timestamp
);
