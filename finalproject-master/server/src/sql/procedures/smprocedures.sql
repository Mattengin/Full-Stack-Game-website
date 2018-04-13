DROP PROCEDURE IF EXISTS spSelectAllSocialMedia;

delimiter $$
CREATE PROCEDURE spSelectAllSocialMedia (

)

BEGIN

    select * from SocialMedia;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectAUsersSocialMedia;

delimiter $$
CREATE PROCEDURE spSelectAUsersSocialMedia (
    u_id int
)

BEGIN

    select
		twitter,
        instagram,
        twitch,
        discord,
        youtube
    from 
		SocialMedia sm
    join
		Users u
	on
		u.id = sm.userid
    where 
		sm.userid = u_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertSocialMedia;

delimiter $$
CREATE PROCEDURE spInsertSocialMedia (
	sm_userid int,
    sm_twitter varchar(50),
    sm_instagram varchar(50),
    sm_twitch varchar(50),
    sm_discord varchar(50),
    sm_youtube varchar(50)
)

BEGIN

    insert into SocialMedia (userid, twitter, instagram, twitch, discord, youtube)
    values (sm_userid, sm_twitter, sm_instagram, sm_twitch, sm_discord, sm_youtube);

    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateSocialMedia;

delimiter $$
CREATE PROCEDURE spUpdateSocialMedia (
    sm_userid int,
    sm_twitter varchar(50),
    sm_instagram varchar(50),
    sm_twitch varchar(50),
    sm_discord varchar(50),
    sm_youtube varchar(50)
)

BEGIN

    update SocialMedia

    set

    userid = coalesce(sm_userid, userid),
    twitter = coalesce(sm_twitter, twitter),
    instagram = coalesce(sm_instagram, instagram),
    twitch = coalesce(sm_twitch, twitch),
    discord = coalesce(sm_discord, discord),
    youtube = coalesce(sm_youtube, youtube)

    where userid = sm_userid;

END $$
delimiter ;



DROP PROCEDURE IF EXISTS spDeleteSocialMedia;

delimiter $$
CREATE PROCEDURE spDeleteSocialMedia (
    sm_id int
)

BEGIN

    delete from SocialMedia
    where userid = sm_id;

END $$
delimiter ;
