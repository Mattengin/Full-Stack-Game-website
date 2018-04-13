DROP TABLE IF EXISTS Forums;

CREATE TABLE Forums (
	id int not null auto_increment primary key,
    postid int not null,
    title varchar(100),
	forumImg text,
    forumText text,
    _created datetime default current_timestamp,
    FOREIGN KEY (postid) REFERENCES PostList(id)
);

