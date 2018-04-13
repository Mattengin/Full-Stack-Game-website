DROP TABLE IF EXISTS CommentList;

CREATE TABLE CommentList (
	id int not null auto_increment primary key,
    commentid int not null,
    FOREIGN KEY (commentid) REFERENCES PostComments(id)
);