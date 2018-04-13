DROP TABLE IF EXISTS SocialMedia;

CREATE TABLE SocialMedia (
    id int not null auto_increment primary key,
    twitter varchar(50),
    instagram varchar(50),
    twitch varchar(50),
    discord varchar(50),
    youtube varchar(50)
);