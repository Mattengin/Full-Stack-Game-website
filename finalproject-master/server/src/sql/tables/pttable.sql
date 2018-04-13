DROP TABLE IF EXISTS PlatformType;

CREATE TABLE PlatformType (
	id int not null auto_increment primary key,
    platform varchar(75) not null,
    systemName varchar(75) not null,
    _created datetime default current_timestamp
);