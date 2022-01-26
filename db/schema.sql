CREATE DATABASE tierList;
USE tierList;

CREATE TABLE `assault_rifles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ballistics_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  'url' varchar(255) NOT NULL
  PRIMARY KEY (`id`)
);

CREATE TABLE `ballistics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

