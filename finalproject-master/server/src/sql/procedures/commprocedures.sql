DROP PROCEDURE IF EXISTS spSelectComments;

delimiter $$
CREATE PROCEDURE spSelectComments(
	
)
BEGIN

	select * from Comments;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneComment;

delimiter $$
CREATE PROCEDURE spSelectOneComment(
	c_id int
)
BEGIN

	select * from Comments where id = c_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertComment;

delimiter $$
CREATE PROCEDURE spInsertComment(
	c_userid int,
    c_newcomment text
)
BEGIN

	insert into Comments (userid, newcomment)
    values (c_userid, c_newcomment);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateComment;

delimiter $$
CREATE PROCEDURE spUpdateComment(
	c_id int,
    c_userid int,
    c_comment text
)
BEGIN

	update Comments
    
    set
    
    id = coalesce(c_id, id),
    userid = coalesce(c_userid, userid),
    newcomment = coalesce(c_comment, newcomment)
    
    where id = c_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteComment;

delimiter $$
CREATE PROCEDURE spDeleteComment (
    c_id int
)

BEGIN   

    delete from Comments
    where id = c_id;

END $$
delimiter ;

DROP PROCEDURE spSelectForumComments;

DELIMITER $$

	CREATE PROCEDURE spSelectForumComments(
		f_id int
    )

BEGIN
    
	SELECT 
			f.title as forumTitle,
			f.forumImg as forumImg,
			f.forumText as forumDescription,
			c.userid as userid,
			u.handle as handle,
			u.avatar as avatar,
			c.newcomment as comment,
			c._created as commentTimeStamp
	FROM forums f
	INNER JOIN commentlist cl 
	ON cl.forumid = f.id
	INNER JOIN comments c 
	ON c.id = cl.commentid
	INNER JOIN users u
	ON u.id = c.userid
	WHERE f.id = f_id;

END $$

DELIMITER ;

DROP PROCEDURE spInsertForumComment;

DELIMITER $$
	
    CREATE PROCEDURE spInsertForumComment(
		u_id int,
        f_id int,
        c_text text
    )
    
	BEGIN

		INSERT INTO comments (userid, newcomment) VALUES (u_id, c_text);

		SET @newCommentId = LAST_INSERT_ID();
        
        INSERT INTO commentlist (forumid, commentid) VALUES (f_id, @newCommentId);
        
        SELECT LAST_INSERT_ID();

	END $$

DELIMITER ;