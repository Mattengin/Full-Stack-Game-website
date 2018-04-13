DROP PROCEDURE IF EXISTS spSelectPlatformFamily;

delimiter $$
CREATE PROCEDURE spSelectPlatformFamily()
begin 

	select * from PlatformFamily;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectAPlatformFamily;

delimiter $$
CREATE PROCEDURE spSelectAPlatformFamily(
	p_famid int
)
begin 

	select * from PlatformFamily where id = p_famid;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertPlatformFamily;

delimiter $$
CREATE PROCEDURE spInsertPlatformFamily(
	p_coname varchar(75)
)
BEGIN

	insert into PlatformFamily (companyName)
    values (p_coname);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdatePlatformFamily;

delimiter $$
CREATE PROCEDURE spUpdatePlatformFamily(
	pf_id int,
    pf_company varchar(75)
)
BEGIN

	update PlatformFamily
    
    set
    
    id = coalesce(pf_id, id),
    companyName = coalesce(pf_company, companyName)
    
    where id = pf_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeletePlatformFamily;

delimiter $$
CREATE PROCEDURE spDeletePlatformFamily (
    pf_id int
)

BEGIN 

    delete from PlatformFamily
    where id = pf_id;

END $$
delimiter ;