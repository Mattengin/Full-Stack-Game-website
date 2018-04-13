DROP PROCEDURE IF EXISTS spSelectUsers;

delimiter $$
CREATE PROCEDURE spSelectUsers(
	
)
BEGIN

	select * from Users;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneUser;

delimiter $$
CREATE PROCEDURE spSelectOneUser(
	u_id int
)
BEGIN

	select * from Users where id = u_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertUser;

delimiter $$
CREATE PROCEDURE spInsertUser(
	u_fname varchar(60),
    u_lname varchar(60),
    u_email varchar(80),
    u_password varchar(256),
    u_handle varchar(70),
    u_avatar text
    
)
BEGIN

	insert into Users (firstname, lastname, email, password, handle, avatar)
    values (u_fname, u_lname, u_email, u_password, u_handle, u_avatar);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateUser;

delimiter $$
CREATE PROCEDURE spUpdateUser(
	u_id int,
    u_firstname varchar(60),
    u_lastname varchar(60),
    u_email varchar(80),
    u_password varchar(256),
    u_handle varchar(70),
    u_avatar text
)
BEGIN

	update Users
    
    set
    
    id = coalesce(u_id, id),
    firstname = coalesce(u_firstname, firstname),
    lastname = coalesce(u_lastname, lastname),
    email = coalesce(u_email, email),
    password = coalesce(u_password, password),
    handle = coalesce(u_handle, password),
    avatar = coalesce(u_avatar, avatar)
    
    where id = u_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteUser;

delimiter $$
CREATE PROCEDURE spDeleteUser (
	u_id int
)
BEGIN

	delete from Users
    where id = u_id;

END $$
delimiter ;


DROP PROCEDURE spSelectUserByHandle;

DELIMITER $$

	CREATE PROCEDURE spSelectUserByHandle(
			u_handle VARCHAR(70)
        )

	BEGIN
        
        SELECT 
			* 
        FROM 
			users 
		WHERE 
			handle LIKE CONCAT("%", u_handle, "%");
    
    END $$

DELIMITER ;