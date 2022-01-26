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

CREATE TABLE `forumPosts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `forum_body` varchar(255) NOT NULL,
  `date` DATE,
  `user` varchar(60),
  PRIMARY KEY(`id`)
);

CREATE TABLE `forumReplies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `reply_body` varchar(255) NOT NULL,
  `date` DATE,
  `user` varchar(60),
  PRIMARY KEY(`id`),
  FOREIGN KEY (`post_id`) REFERENCES forumPosts(`id`)
);
--ALTER TABLE assault_rifles ADD votes BIGINT NOT NULL;

