DROP TABLE IF EXISTS Platform;

CREATE TABLE Platform (
	id int not null auto_increment primary key,
    systemid int not null,
    platfamilyid int not null, 
    _created datetime default current_timestamp,
    FOREIGN KEY (systemid) REFERENCES PlatformType(id),
	FOREIGN KEY (platfamilyid) REFERENCES PlatformFamily(id)
);

