use CGTCLOGINPAGE;

CREATE TABLE IF NOT EXISTS Login(
    user_id INT NOT NULL primary key auto_increment,
    Username varchar(150),
    UserPass varchar(150)
)

--@block
use CGTCLOGINPAGE;
INSERT INTO Login(Username, UserPass)
values("sudipdas98", "sudipdas98")

--@block
