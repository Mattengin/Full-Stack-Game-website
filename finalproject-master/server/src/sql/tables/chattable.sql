DROP TABLE IF EXISTS Chat;

CREATE TABLE Chat (
    id int not null auto_increment,
    body text,
    userto int not null,
    userfrom int not null
);