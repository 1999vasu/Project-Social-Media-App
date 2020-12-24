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