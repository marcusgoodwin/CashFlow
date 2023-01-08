DROP DATABASE IF EXISTS user;
CREATE DATABASE user;
USE user;

DROP DATABASE IF EXISTS transactions_db;
CREATE DATABASE transactions_db;
USE transactions_db;

create table user(
   user_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(8) NOT NULL
);




create table transactions_db(
    transactions_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    user_id INT,
    description VARCHAR(255) NOT NULL,
    merchant_name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
    ON DELETE SET NULL
);
