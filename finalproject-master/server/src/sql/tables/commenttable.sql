DROP TABLE IF EXISTS Comments;

CREATE TABLE Comments (
	id int not null auto_increment primary key,
    userid int not null,
    newcomment text,
    _created datetime default current_timestamp
);
