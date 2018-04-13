DROP PROCEDURE IF EXISTS spSelectPlatforms;

delimiter $$
CREATE PROCEDURE spSelectPlatforms(
	
)
BEGIN

	select * from Platform;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectSinglePlatform;

delimiter $$
CREATE PROCEDURE spSelectSinglePlatform(
	p_id int
)
BEGIN

	select * from Platform where id = p_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeletePlatform;

delimiter $$
CREATE PROCEDURE spDeletePlatform (
	p_id int
)

BEGIN

	delete from Platform
	where id = p_id;

END $$
delimiter ;