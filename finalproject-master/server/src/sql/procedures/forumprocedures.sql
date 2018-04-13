DROP PROCEDURE IF EXISTS spSelectForums;

delimiter $$
CREATE PROCEDURE spSelectForums(

)
BEGIN

	select * from Forums;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneForum;

delimiter $$
CREATE PROCEDURE spSelectOneForum(
    f_id int
)
BEGIN

	select * from Forums
    where id = f_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertForum;

delimiter $$
CREATE PROCEDURE spInsertForum(
	f_commentid int,
    f_title varchar(100),
    f_img text,
    f_text text
)
begin 

	insert into Forums (commentid, title, forumImg, forumText)
    values (f_commentid, f_title, f_img, f_text);
    
    select last_insert_id();
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateForum;

delimiter $$
CREATE PROCEDURE spUpdateForum(
	f_id int,
    f_commentid int,
    f_title varchar(100),
    f_img text,
    f_text text
)
BEGIN

	update Forums
    
    set
    
    id = coalesce(f_id, id),
    commentid = coalesce(f_commentid, commentid),
    title = coalesce(f_title, title),
    forumImg = coalesce(f_img, forumImg),
    forumText = coalesce(f_text, forumText)
    
    where id = f_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteForum;

delimiter $$
CREATE PROCEDURE spDeleteForum (
    f_id int
)

BEGIN

    delete from Forums
    where id = f_id;

END $$
delimiter ;

drop procedure if exists spSelectForumInfo;

delimiter $$
create procedure spSelectForumInfo (
    f_creatorid int
)

begin

    select
        title,
        forumImg as image,
        forumText as text,
        handle as handle,
        avatar as avatar
    from 
        Forums f
    join
        Users u
    where 
        u.id = f_creatorid;

end $$
delimiter ;