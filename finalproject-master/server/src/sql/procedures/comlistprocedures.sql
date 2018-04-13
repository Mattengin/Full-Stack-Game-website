DROP PROCEDURE IF EXISTS spSelectCommentList;

delimiter $$
CREATE PROCEDURE spSelectCommentList(

)
begin 

	select * from CommentList;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectListComment;

delimiter $$
CREATE PROCEDURE spSelectListComment(
	c_id int
)
begin 

	select * from CommentList
    where id = c_id;
    
end $$
delimiter ;

