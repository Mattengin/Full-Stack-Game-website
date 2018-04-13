DROP TABLE IF EXISTS GamerTags;

CREATE TABLE GamerTags (
	id int not null auto_increment primary key,
    userid int not null,
    gamertag varchar(70) not null,
    platformid int not null,
    _created datetime default current_timestamp,
    FOREIGN KEY(userid) REFERENCES Users(id),
    FOREIGN KEY(platformid) REFERENCES Platform(id)
);