DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT primary key,
  firstname varchar(60) DEFAULT NULL,
  lastname varchar(60) DEFAULT NULL,
  email varchar(80) NOT NULL,
  password varchar(256) NOT NULL,
  handle varchar(70) NOT NULL,
  avatar text,
  _created datetime DEFAULT CURRENT_TIMESTAMP
); 

DROP TABLE IF EXISTS Tokens;

CREATE TABLE Tokens (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
   _created datetime default current_timestamp,
  PRIMARY KEY (id, userid),
  KEY usersFK_idx (userid),
  CONSTRAINT usersFK FOREIGN KEY (userid) REFERENCES Users(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);


DROP TABLE IF EXISTS SocialMedia;

CREATE TABLE SocialMedia (
    id int not null auto_increment primary key,
    userid int not null,
    twitter varchar(50),
    instagram varchar(50),
    twitch varchar(50),
    discord varchar(50),
    youtube varchar(50),
     _created datetime default current_timestamp
);

DROP TABLE IF EXISTS PlatformType;

CREATE TABLE PlatformType (
	id int not null auto_increment primary key,
    platform varchar(75) not null,
    systemName varchar(75) not null,
    _created datetime default current_timestamp
);

DROP TABLE IF EXISTS Platform;

CREATE TABLE Platform (
	id int not null auto_increment primary key,
    systemid int not null,
    platfamilyid int not null, 
    _created datetime default current_timestamp
);
foreign key (systemid) references PlatformType (id),
foreign key (platfamilyid) references PlatformFamily(id)

DROP TABLE IF EXISTS PlatformFamily;

CREATE TABLE PlatformFamily (
	id int not null auto_increment primary key,
    companyName varchar(75) not null,
    _created datetime default current_timestamp
);

DROP TABLE IF EXISTS Games;

CREATE TABLE Games (
	id int not null auto_increment primary key,
    hoursLogged int not null,
    gameList int,
    _current datetime default current_timestamp
);

DROP TABLE IF EXISTS GamerTags;

CREATE TABLE GamerTags (
	id int not null auto_increment primary key,
    userid int not null,
    gamertag varchar(70) not null,
    platformid int not null,
    _created datetime default current_timestamp
);
foreign key (userid) references Users (id),
foreign key (platformid) references Platform (id)

DROP TABLE IF EXISTS Forums;

CREATE TABLE Forums (
	id int not null auto_increment primary key,
    commentid int not null,
    title varchar(100),
	forumImg text,
    forumText text,
    creatorid int,
    upvotes int,
    _created datetime default current_timestamp
);
foreign key (creatorid) references Users (id)


DROP TABLE IF EXISTS CommentList;

CREATE TABLE CommentList (
	id int not null auto_increment primary key,
    commentid int not null,
     _created datetime default current_timestamp
);
foreign key (commentid) references Comments (id)

DROP TABLE IF EXISTS Comments;

CREATE TABLE Comments (
	id int not null auto_increment primary key,
    userid int not null,
    newcomment text,
    likes int,
    _created datetime default current_timestamp
);

DROP TABLE IF EXISTS Status;

CREATE TABLE Status (
    id int not null auto_increment primary key,
    userid int,
    status varchar(280),
    likes int,
    _created datetime default current_timestamp
);
foreign key (userid) references Users (id)

drop table if exists Relationships;

create table Relationships (
    user_one_id unsigned int not null,
    user_two_id unsigned int not null,
    status_interaction int not null,
    _created datetime default current_timestamp
    PRIMARY KEY (user_one_id, user_two_id)
);
foreign key (user_one_id) references Users (id),
foreign key (user_two_id) references Users (id)

drop table if exists GameDirectory;

create table GameDirectory (
	id int not null auto_increment primary key,
    gameCoverImage text,
    gameTitle varchar(100),
    platformid int,
    gameSummary text,
    genre varchar(60),
    _created datetime default current_timestamp
);

foreign key (platformid) references Platform (id)

drop table if exists Likes;

create table Likes (
	statusid int,
    userid int,
    primary key (statusid, userid),
    foreign key (statusid) references status (id),
    foreign key (userid) references users(id)
);