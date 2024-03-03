###### DataBase Setup #######

$ mysql -u root 

1. create database socialmediadb;
2. create user 'socialuser' identified by 'socialpass';
3. grant all privileges on socialmediadb.* to socialuser;
4. flush privileges;

######## Project structure #########

SRC
├───controller   # function to  connect routes to db opertaion
├───db           # db connetion and models defination
├───public       # html/ css/ js for static content of website
└───routes       # express middlewares routes wise