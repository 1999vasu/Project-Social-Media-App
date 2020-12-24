# Project-Social-Media-App

## SQL Setup

```
$ mysql -u root
```

```
mysql> create database socialmediadb;
mysql> create user socialuser identified by 'socialpass';
mysql> grant all privileges on socialmediadb.* to socialuser;
mysql> flush privileges;
```


## Project structure

```
src/controllers/ #functions to connect routes to db operations
src/db/          #db connections and model controllers
src/public/      # html/js/css files for static part of site
src/routes/      # express middlewares(route wise)
```

## Business Logic

### Users
1. **Create Users**
    creating new  user with random username

### Posts
1. **create Posts**
    this will create a new post, required fields are:
    - username (author of the post)
    - title (title of the post)
    - body (content of the post)

2. **Show All Posts**
    list all posts, we should have following support
    - filter by username
    - filter by title

3. **Edit Users**

4. **Delete Posts**

### Comments
1. **show all comments (of a user)**
2. **show all comments (of a post)**
3. **Add a comment**
