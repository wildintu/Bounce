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
-- CREATE USER 'bounce'@'localhost';
-- IDENTIFIED BY 'password123';
-- GRANT ALL PRIVILEGES
-- ON bounce.*
-- TO 'bounce'@'localhost';
-- create database bounce;
-- use bounce;

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
  `branchId` int(11) DEFAULT NULL,
  `branchCount` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_idx` (`origId`),
  CONSTRAINT `mainPrimary` FOREIGN KEY (`origId`) REFERENCES `main` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Secondary`
--

LOCK TABLES `Secondary` WRITE;
/*!40000 ALTER TABLE `Secondary` DISABLE KEYS */;
INSERT INTO `Secondary` VALUES (1,1,'Josh','Final Project Ideas',NULL,1,1,1,'0,1,2,','2020-04-19 20:01:07'),(2,1,'Ryan','Brainstorming App!',NULL,1,2,1,'0,1,','2020-04-19 20:01:20'),(3,1,'Anonymous','Mentorship App',NULL,1,2,2,'0,1,','2020-04-19 20:01:31'),(6,1,'Lexi','What kinds of mentors?',NULL,3,3,1,'0,1,','2020-04-19 20:02:34'),(7,1,'Chris','How would it work?',NULL,2,3,1,'0,1,','2020-04-19 20:02:53'),(10,1,'Ryan','Allow different organizations & teams to bounce ideas anywhere!',NULL,7,4,1,'0,1,','2020-04-19 20:04:25'),(11,1,'Chris','Maybe even add a graph so they can visualize?',NULL,10,5,1,'0,1,','2020-04-19 20:04:47'),(12,1,'Anonymous','Different kinds from variety of professions',NULL,6,4,1,'0,','2020-04-19 20:05:56'),(13,1,'Ryan','Yes! Like a web graph.',NULL,11,6,1,'0,','2020-04-19 20:22:54');
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
) ENGINE=InnoDB AUTO_INCREMENT=163 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'#e04141'),(2,'#833AD2'),(3,'#FEBD52'),(4,'#4C69F4'),(5,'#EE53AA'),(6,'#6AD554'),(7,'#EF8736'),(8,'rgb(28, 161, 231)'),(9,'rgb(180, 28, 212)'),(10,'rgb(222, 53, 137)'),(11,'rgb(21, 193, 212)'),(12,'rgb(162, 101, 204)'),(13,'rgb(194, 155, 74)'),(14,'rgb(15, 62, 86)'),(15,'rgb(110, 240, 122)'),(16,'rgb(165, 114, 8)'),(17,'rgb(102, 28, 165)'),(18,'rgb(52, 82, 202)'),(19,'rgb(225, 48, 131)'),(20,'rgb(249, 161, 190)'),(21,'rgb(189, 141, 61)'),(22,'rgb(146, 15, 44)'),(23,'rgb(91, 94, 240)'),(24,'rgb(89, 119, 151)'),(25,'rgb(65, 149, 183)'),(26,'rgb(46, 100, 81)'),(27,'rgb(253, 182, 78)'),(28,'rgb(57, 133, 195)'),(29,'rgb(34, 92, 45)'),(30,'rgb(119, 210, 229)'),(31,'rgb(127, 12, 216)'),(32,'rgb(21, 52, 234)'),(33,'rgb(170, 132, 160)'),(34,'rgb(47, 143, 106)'),(35,'rgb(14, 210, 203)'),(36,'rgb(249, 101, 159)'),(37,'rgb(155, 169, 213)'),(38,'rgb(211, 96, 229)'),(39,'rgb(207, 81, 3)'),(40,'rgb(133, 156, 111)'),(41,'rgb(146, 230, 203)'),(42,'rgb(83, 120, 233)'),(43,'rgb(151, 252, 60)'),(44,'rgb(28, 118, 67)'),(45,'rgb(189, 101, 78)'),(46,'rgb(179, 33, 130)'),(47,'rgb(57, 148, 244)'),(48,'rgb(18, 219, 59)'),(49,'rgb(232, 144, 208)'),(50,'rgb(151, 29, 168)'),(51,'rgb(20, 123, 177)'),(52,'rgb(112, 140, 213)'),(53,'rgb(179, 199, 137)'),(54,'rgb(178, 63, 156)'),(55,'rgb(68, 44, 171)'),(56,'rgb(9, 198, 64)'),(57,'rgb(80, 153, 36)'),(58,'rgb(25, 146, 136)'),(59,'rgb(111, 245, 95)'),(60,'rgb(183, 56, 177)'),(61,'rgb(148, 182, 239)'),(62,'rgb(219, 137, 3)'),(63,'rgb(125, 125, 65)'),(64,'rgb(24, 67, 154)'),(65,'rgb(113, 25, 148)'),(66,'rgb(190, 103, 121)'),(67,'rgb(63, 163, 228)'),(68,'rgb(251, 141, 8)'),(69,'rgb(238, 190, 90)'),(70,'rgb(112, 134, 91)'),(71,'rgb(43, 124, 213)'),(72,'rgb(154, 108, 57)'),(73,'rgb(89, 98, 135)'),(74,'rgb(206, 160, 60)'),(75,'rgb(226, 1, 86)'),(76,'rgb(217, 232, 115)'),(77,'rgb(135, 203, 62)'),(78,'rgb(235, 21, 70)'),(79,'rgb(79, 9, 136)'),(80,'rgb(85, 166, 127)'),(81,'rgb(196, 120, 191)'),(82,'rgb(103, 227, 50)'),(83,'rgb(171, 250, 48)'),(84,'rgb(246, 127, 20)'),(85,'rgb(63, 187, 175)'),(86,'rgb(171, 159, 113)'),(87,'rgb(30, 234, 172)'),(88,'rgb(12, 109, 20)'),(89,'rgb(4, 80, 64)'),(90,'rgb(176, 19, 55)'),(91,'rgb(87, 9, 94)'),(92,'rgb(150, 142, 253)'),(93,'rgb(248, 195, 182)'),(94,'rgb(234, 246, 194)'),(95,'rgb(85, 47, 251)'),(96,'rgb(146, 97, 104)'),(97,'rgb(24, 27, 121)'),(98,'rgb(21, 229, 226)'),(99,'rgb(110, 247, 34)'),(100,'rgb(58, 185, 245)'),(101,'rgb(216, 142, 179)'),(102,'rgb(50, 30, 146)'),(103,'rgb(223, 127, 192)'),(104,'rgb(31, 104, 22)'),(105,'rgb(186, 240, 116)'),(106,'rgb(185, 143, 223)'),(107,'rgb(5, 136, 81)'),(108,'rgb(97, 82, 197)'),(109,'rgb(32, 229, 197)'),(110,'rgb(30, 52, 46)'),(111,'rgb(205, 186, 213)'),(112,'rgb(170, 56, 17)'),(113,'rgb(113, 205, 165)'),(114,'rgb(99, 109, 182)'),(115,'rgb(156, 54, 97)'),(116,'rgb(149, 19, 94)'),(117,'rgb(112, 192, 143)'),(118,'rgb(228, 147, 145)'),(119,'rgb(181, 140, 218)'),(120,'rgb(237, 37, 50)'),(121,'rgb(188, 157, 168)'),(122,'rgb(197, 61, 218)'),(123,'rgb(99, 108, 171)'),(124,'rgb(218, 134, 180)'),(125,'rgb(88, 21, 109)'),(126,'rgb(33, 95, 166)'),(127,'rgb(111, 170, 98)'),(128,'rgb(69, 176, 22)'),(129,'rgb(90, 172, 212)'),(130,'rgb(104, 111, 131)'),(131,'rgb(4, 244, 123)'),(132,'rgb(160, 22, 82)'),(133,'rgb(83, 134, 94)'),(134,'rgb(35, 26, 22)'),(135,'rgb(226, 49, 38)'),(136,'rgb(230, 195, 10)'),(137,'rgb(211, 105, 229)'),(138,'rgb(19, 189, 148)'),(139,'rgb(211, 201, 186)'),(140,'rgb(3, 227, 107)'),(141,'rgb(170, 138, 249)'),(142,'rgb(194, 45, 238)'),(143,'rgb(25, 137, 56)'),(144,'rgb(211, 197, 224)'),(145,'rgb(227, 181, 16)'),(146,'rgb(226, 237, 157)'),(147,'rgb(179, 145, 160)'),(148,'rgb(161, 165, 40)'),(149,'rgb(131, 86, 68)'),(150,'rgb(141, 37, 202)'),(151,'rgb(249, 40, 241)'),(152,'rgb(27, 211, 76)'),(153,'rgb(66, 69, 20)'),(154,'rgb(231, 205, 218)'),(155,'rgb(91, 4, 87)'),(156,'rgb(187, 103, 82)'),(157,'rgb(168, 128, 56)'),(158,'rgb(113, 75, 106)'),(159,'rgb(174, 36, 65)'),(160,'rgb(200, 75, 125)'),(161,'rgb(103, 32, 14)'),(162,'rgb(43, 133, 28)');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main`
--

LOCK TABLES `main` WRITE;
/*!40000 ALTER TABLE `main` DISABLE KEYS */;
INSERT INTO `main` VALUES (1,NULL,'Josh','Final Project Ideas','Classroom','2020-04-19 20:01:07');
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

-- Dump completed on 2020-04-19 15:27:52
