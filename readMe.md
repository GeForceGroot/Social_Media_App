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

Business Logic
##  Controller ##
   
## User ##
- This will create a new user with a random username

## Post ##

1. *** create Post ***
   This will create a new post, required fildes are
   -username (author name of this post)
   -title
   -body

2. *** show all posts ***
This will show all the posts, also should have followinf filtering support
-filter by username
-filter by query conatined in title

3. *** Edit post ***

4 *** Deldte Post ***

## Comments ##

1. ** Show all comments **

2. ** show all comments under a post **

3 ** add a post **
