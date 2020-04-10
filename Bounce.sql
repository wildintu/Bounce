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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_idx` (`origId`),
  CONSTRAINT `mainPrimary` FOREIGN KEY (`origId`) REFERENCES `main` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Secondary`
--

LOCK TABLES `Secondary` WRITE;
/*!40000 ALTER TABLE `Secondary` DISABLE KEYS */;
INSERT INTO `Secondary` VALUES (3,5,'Carol','Who needs attendance when you can just feed everyone to tigers?',NULL,'2020-04-10 03:45:57'),(4,5,'Carol','Who needs attendance when you can just feed everyone to tigers?',NULL,'2020-04-10 03:48:12'),(5,5,'Carol','Who needs attendance when you can just feed everyone to tigers?',NULL,'2020-04-10 03:48:55'),(6,5,'Carol','Who needs attendance when you can just feed everyone to tigers?',NULL,'2020-04-10 03:49:13'),(7,5,'Carol','Who needs attendance when you can just feed everyone to tigers?',NULL,'2020-04-10 03:49:55'),(8,5,'Carol','Who needs attendance when you can just feed everyone to tigers?',NULL,'2020-04-10 03:50:18'),(9,5,'Carol','Who needs attendance when you can just feed everyone to tigers?',NULL,'2020-04-10 03:50:33'),(10,5,'Carol','Who needs attendance when you can just feed everyone to tigers?',NULL,'2020-04-10 03:52:46'),(11,9,'Joe Exotic','Carol is a b$$$$$$',NULL,'2020-04-10 04:15:15');
/*!40000 ALTER TABLE `Secondary` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main`
--

LOCK TABLES `main` WRITE;
/*!40000 ALTER TABLE `main` DISABLE KEYS */;
INSERT INTO `main` VALUES (5,NULL,'Jake','Best Ways of Checking Attendance','classroom','2020-04-10 00:23:59'),(6,NULL,'Garrett','Best Ways to Wipe a Bunch of Laptops','classroom','2020-04-10 03:00:44'),(7,NULL,'Yeti','skfjasjfjfjsadkfjasfjsakjfaskjfls','business','2020-04-10 04:02:53'),(8,NULL,'Hankey','fdhdhdhdhdhdhdhdhd','classroom','2020-04-10 04:13:50'),(9,NULL,'Hankey','fdhdhdhdhdhdhdhdhd','classroom','2020-04-10 04:15:15');
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

-- Dump completed on 2020-04-09 23:31:38
