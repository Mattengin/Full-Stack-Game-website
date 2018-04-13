DROP PROCEDURE IF EXISTS spSelectGamerTag;

delimiter $$
CREATE PROCEDURE spSelectGamerTag(

)
BEGIN

	select * from GamerTags;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneGamerTag;

delimiter $$
CREATE PROCEDURE spSelectOneGamerTag(
	gt_id int
)
BEGIN

	select * from GamerTags where id = gt_id;

END $$
delimiter ;

DROP PROCEDURE spSelectGamerTagAndPlatform;

DELIMITER $$ 
 
 CREATE PROCEDURE spSelectGamerTagAndPlatform(
	u_id int
 )
 
BEGIN
 
	SELECT 
			u.id as userid,
			gt.gamertag as gamertag,
			pf.companyName as company,
			pt.systemName as system,
			pt.platform as platformType
	FROM gamertags gt
	INNER JOIN users u ON gt.userid = u.id
	INNER JOIN platform p ON p.id = gt.platformid
	INNER JOIN platformfamily pf ON pf.id = p.platfamilyid
	INNER JOIN platformtype pt ON pt.id = p.systemid
	WHERE userid = u_id;
 
 END $$
 
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertGamerTag;

delimiter $$
CREATE PROCEDURE spInsertGamerTag(
	gt_userid int,
    gt_gtag varchar(70),
    gt_platformid int
)
BEGIN

	insert into GamerTags (userid, gamertag, platformid)
    values (gt_userid, gt_gtag, gt_platformid);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateGamerTag;

delimiter $$
CREATE PROCEDURE spUpdateGamerTag(
	gt_id int,
    gt_userid int,
    gt_gamertag varchar(70),
    gt_platformid int
)
BEGIN

	update GamerTags
    
    set
    
    id = coalesce(gt_id, id),
    userid = coalesce(gt_userid, userid),
    gamertag = coalesce(gt_gamertag, gamertag),
    platformid = coalesce(gt_platformid, platformid)
    
    where id = gt_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteGamerTag;

delimiter $$
CREATE PROCEDURE spDeleteGamerTag (
    gt_id int
)

BEGIN 

    delete from GamerTags
    where id = gt_id;

END $$
delimiter ;

DROP PROCEDURE spSelectGamerTagByPlatform;

DELIMITER $$ 
 
 CREATE PROCEDURE spSelectGamerTagByPlatform(
	u_id int,
    p_id int
 )
 
BEGIN
 
	SELECT 
			u.id as userid,
			gt.gamertag as gamertag,
			pf.companyName as company,
			pt.systemName as system,
			pt.platform as platformType,
            p.id as platformId
	FROM gamertags gt
	INNER JOIN users u ON gt.userid = u.id
	INNER JOIN platform p ON p.id = gt.platformid
	INNER JOIN platformfamily pf ON pf.id = p.platfamilyid
	INNER JOIN platformtype pt ON pt.id = p.systemid
	WHERE userid = u_id AND p.id = p_id;
 
 END $$
 
DELIMITER ;