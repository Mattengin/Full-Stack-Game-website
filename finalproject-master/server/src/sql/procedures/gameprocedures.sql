DROP PROCEDURE IF EXISTS spSelectGames;

delimiter $$
CREATE PROCEDURE spSelectGames(
	
)
BEGIN

	select * from Games;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectSingleGame;

delimiter $$ 
CREATE PROCEDURE spSelectSingleGame(
	g_id int
)
begin

	select * from Games where id = g_id;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertGameData;

delimiter $$
CREATE PROCEDURE spInsertGameData(
	g_hours int,
    g_games text,
    g_img text
)
BEGIN

	insert into Games (hoursLogged, gameList, gameImage)
    values (g_hours, g_games, g_img);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateGameData;

delimiter $$
CREATE PROCEDURE spUpdateGameData(
	g_id int,
    g_hours int,
    g_game text,
    g_image text
)
BEGIN

	update Games
    
    set
    
    id = coalesce(g_id, id),
    hoursLogged = coalesce(g_hours, hoursLogged),
    gameList = coalesce(g_game, gameList),
    gameImage = coalesce(g_image, gameImage)
    
    where id = g_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteGame;

delimiter $$
CREATE PROCEDURE spDeleteGame (
    g_id int
)

BEGIN

    delete from Games
    where id = g_id;

END $$
delimiter ;

DROP PROCEDURE spSelectGameList;

DELIMITER $$

		CREATE PROCEDURE spSelectGameList(
			u_id INT
        )
        
	BEGIN
    
		SELECT 
			userId,
            gameId,
            systemId as platformId,
            gameTitle,
            gameImg,
            hoursLogged,
            gameCompleted
		FROM 
			games
		WHERE
			userId = u_id;
    
    END $$

DELIMITER 

DROP PROCEDURE spInsertGameList;

DELIMITER $$

		CREATE PROCEDURE spInsertGameList(
			u_id INT,
            g_gameId INT,
            g_systemId INT,
            g_gameTitle VARCHAR(80),
            g_gameImg TEXT,
            g_hoursLogged INT,
            g_gameCompleted INT(1)
        )
        
	BEGIN
    
		INSERT INTO
			games (
				userId, 
                gameId, 
                systemId, 
                gameTitle, 
                gameImg, 
                hoursLogged, 
                gameCompleted
                )
                
			VALUES
				(
					u_id,
                    g_gameId,
                    g_systemId,
                    g_gameTitle,
                    g_gameImg,
                    g_hoursLogged,
                    g_gameCompleted
                );
                
		SELECT LAST_INSERT_ID();
    
    END $$

DELIMITER ;

DROP PROCEDURE spDeleteGameList;

DELIMITER $$

		CREATE PROCEDURE spDeleteGameList(
			u_id INT,
            g_gameId INT
        )
        
	BEGIN
    
		DELETE FROM
			games
		WHERE
			userId = u_id AND gameId = g_gameId;
    
    END $$

DELIMITER ;