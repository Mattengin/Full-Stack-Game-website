drop table if exists Relationships;

create table Relationships (
    user_one_id unsigned int not null,
    user_two_id unsigned int not null,
    status_interaction int(1) not null,
    _created datetime default current_timestamp
    PRIMARY KEY (user_one_id, user_two_id)
);

FOREIGN KEY (user_one_id) REFERENCES Users(id)
FOREIGN KEY (user_two_id) REFERENCES Users(id)