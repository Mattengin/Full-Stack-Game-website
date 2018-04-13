DROP PROCEDURE IF EXISTS spSelectAllChat;

delimiter $$
CREATE PROCEDURE spSelectAllChat (

)

BEGIN 

    select * from Chat;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneChat;

delimiter $$
CREATE PROCEDURE spSelectOneChat (
    c_id int
)

BEGIN

    select * from Chat
    where id = c_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertChat;

delimiter $$
CREATE PROCEDURE spInsertChat (
    c_body text,
    c_to int,
    c_from int
)

BEGIN

    insert into Chat (body, userto, userfrom)
    values (c_body, c_to, c_from);

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteChat;

delimiter $$
CREATE PROCEDURE spDeleteChat (
    c_id int
)

BEGIN 

    delete from Chat 
    where id = c_id;

END $$
delimiter ;