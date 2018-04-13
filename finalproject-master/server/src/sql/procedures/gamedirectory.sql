drop procedure if exists spSelectGameAndConsole;

delimiter $$
create procedure spSelectGameAndConsole (
	gd_id int
)

begin

	select 
		gameCoverImage as cover,
		gameTitle as title,
		companyName as company,
		systemName as system,
		platform,
		gameSummary as summary,
		genre
	from 
		GameDirectory gd
	join 
		Platform p
	on 
		p.id = gd.platformid
	join
		PlatformType pt 
	on
		pt.id = p.systemid
	join 
		PlatformFamily pf
	on
		pf.id = p.platfamilyid
	where gd_id = gd.id;
        
end $$
delimiter ;