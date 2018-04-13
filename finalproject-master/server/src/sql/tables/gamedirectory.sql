drop table if exists GameDirectory;

create table GameDirectory (
	id int not null auto_increment primary key,
    gameCoverImage text,
    gameTitle varchar(100),
    platformid int,
    gameSummary text,
    genre varchar(60),
    _created datetime default current_timestamp
);

foreign key (platformid) references Platform (id)