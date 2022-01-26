CREATE DATABASE tierList;
USE tierList;

CREATE TABLE `assault_rifles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ballistics_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `ballistics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` decimal(5,2) NOT NULL,
  PRIMARY KEY (`id`)
);

