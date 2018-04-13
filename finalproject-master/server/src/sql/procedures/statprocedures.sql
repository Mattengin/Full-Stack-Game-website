DROP PROCEDURE IF EXISTS spSelectEveryStatus;

delimiter $$
CREATE PROCEDURE spSelectEveryStatus (

)

BEGIN

    select * from Status;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectAStatus;

delimiter $$
CREATE PROCEDURE spSelectAStatus(
    s_id int
)

BEGIN

    select * from Status where id = s_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertStatus;

delimiter $$
CREATE PROCEDURE spInsertStatus (
    s_userid int,
    s_status varchar(280)
)

BEGIN

    insert into Status (userid, status) 
    values (s_userid, s_status);

    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateStatus;

delimiter $$
CREATE PROCEDURE spUpdateStatus (
    s_id int,
    s_userid int,
    s_status varchar(280)
)

BEGIN

    update Status

    set 

    id = coalesce(s_id, id),
    userid = coalesce(s_userid, userid),
    status = coalesce(s_status, status)

    where id = s_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteStatus;

delimiter $$
CREATE PROCEDURE spDeleteStatus (
    s_id int
)

BEGIN

    delete from Status where id = s_id;

END $$
delimiter ;


drop procedure if exists spSelectStatusInfo;

delimiter $$
create procedure spSelectStatusInfo (
    s_userid int
)

begin
	select
		status s,
        handle h,
        avatar a
	from 
		Status s
	join 
		Users u
	on
		u.id = s.userid
	where
		s.userid = s_userid;
        
end $$
delimiter ;

DROP PROCEDURE spSelectStatusInfoWithId;
    
DELIMITER $$

	CREATE PROCEDURE spSelectStatusInfoWithId(
    s_userid INT
    )

	BEGIN
		
        SELECT 
			s.id as statusId,
            status,
            handle,
            avatar
		FROM
			status s
		JOIN
			users u
		ON
			u.id = s.userid
		WHERE
			s.userid = s_userid;
        
    END $$

DELIMITER ;