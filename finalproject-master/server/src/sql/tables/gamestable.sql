DROP TABLE IF EXISTS Games;

CREATE TABLE Games (
	id int not null auto_increment primary key,
    hoursLogged int not null,
    gameList varchar(200),
    gameImage text,
    _current datetime default current_timestamp
);

