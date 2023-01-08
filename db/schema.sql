DROP DATABASE IF EXISTS transactions_db;

CREATE DATABASE transactions_db;
USE transactions_db;

create table user(
    id int auto_increment primary key,
    first_name varchar(30),
    last_name varchar(30),
    password varchar(30) not null
);




create table transactions(
    id int auto_increment primary key,
    item_name varchar(30),
    merchant_name varchar(30),
    category varchar(30),
    userId int FOREIGN KEY (userId) REFERENCES user(id)
);
