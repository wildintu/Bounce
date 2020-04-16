-- MySQL dump 10.13  Distrib 5.7.29, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: bounce
-- ------------------------------------------------------
-- Server version	5.7.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Secondary`
--

DROP TABLE IF EXISTS `Secondary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Secondary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `origId` int(11) NOT NULL,
  `secName` char(100) DEFAULT NULL,
  `secInput` text,
  `anonymous` tinyint(1) DEFAULT NULL,
  `nodeId` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_idx` (`origId`),
  CONSTRAINT `mainPrimary` FOREIGN KEY (`origId`) REFERENCES `main` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Secondary`
--

LOCK TABLES `Secondary` WRITE;
/*!40000 ALTER TABLE `Secondary` DISABLE KEYS */;
INSERT INTO `Secondary` VALUES (1,1,'Josh','Final Project Ideas',NULL,1,1,'2020-04-16 03:38:35'),(6,1,'Franco','Mentorship app',NULL,1,2,'2020-04-16 04:44:37'),(9,1,'Ryan','Brainstorm App',NULL,1,2,'2020-04-16 05:01:06'),(10,1,'Anonymous','Drinking app',NULL,1,2,'2020-04-16 05:01:14'),(11,1,'Lexi','YES',NULL,10,3,'2020-04-16 05:01:24'),(12,2,'Jake','How to take multiple attendance',NULL,12,1,'2020-04-16 14:06:04'),(13,2,'GarrBear','Use slack bot!',NULL,12,2,'2020-04-16 14:06:29'),(14,2,'Anonymous','How about no attendance',NULL,12,2,'2020-04-16 14:06:44'),(17,3,'Haley','Ways for people to apply ',NULL,17,1,'2020-04-16 14:13:46'),(19,3,'Anonymous','dfasdfasd',NULL,17,2,'2020-04-16 14:14:17'),(22,1,'Jennifer','That sounds like a great idea!',NULL,9,3,'2020-04-16 14:57:39'),(23,1,'Chris','I always wanted to see an app like that!',NULL,6,3,'2020-04-16 14:57:54'),(26,1,'asdfsdf','asdfsadf',NULL,25,4,'2020-04-16 14:58:15'),(27,1,'fsdsaf','asfdsadf',NULL,26,5,'2020-04-16 14:58:19');
/*!40000 ALTER TABLE `Secondary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'#e04141'),(2,'rgb(106, 80, 29)'),(3,'rgb(197, 167, 77)'),(4,'rgb(229, 65, 170)'),(5,'rgb(236, 143, 209)'),(6,'rgb(163, 119, 250)'),(7,'rgb(164, 137, 151)'),(8,'rgb(28, 161, 231)'),(9,'rgb(180, 28, 212)'),(10,'rgb(222, 53, 137)'),(11,'rgb(21, 193, 212)'),(12,'rgb(162, 101, 204)'),(13,'rgb(194, 155, 74)'),(14,'rgb(15, 62, 86)'),(15,'rgb(110, 240, 122)'),(16,'rgb(165, 114, 8)'),(17,'rgb(102, 28, 165)'),(18,'rgb(52, 82, 202)'),(19,'rgb(225, 48, 131)'),(20,'rgb(249, 161, 190)'),(21,'rgb(189, 141, 61)'),(22,'rgb(146, 15, 44)'),(23,'rgb(91, 94, 240)'),(24,'rgb(89, 119, 151)'),(25,'rgb(65, 149, 183)'),(26,'rgb(46, 100, 81)'),(27,'rgb(253, 182, 78)'),(28,'rgb(57, 133, 195)'),(29,'rgb(34, 92, 45)'),(30,'rgb(119, 210, 229)'),(31,'rgb(127, 12, 216)');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main`
--

DROP TABLE IF EXISTS `main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `main` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `origUserName` char(100) NOT NULL,
  `origUserPost` text NOT NULL,
  `ideaType` varchar(45) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `userid_UNIQUE` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main`
--

LOCK TABLES `main` WRITE;
/*!40000 ALTER TABLE `main` DISABLE KEYS */;
INSERT INTO `main` VALUES (1,NULL,'Josh','Final Project Ideas','Classroom','2020-04-16 03:38:35'),(2,NULL,'Jake','How to take multiple attendance','Classroom','2020-04-16 14:06:04'),(3,NULL,'Haley','Ways for people to apply ','Business','2020-04-16 14:13:46');
/*!40000 ALTER TABLE `main` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-16 10:28:02
