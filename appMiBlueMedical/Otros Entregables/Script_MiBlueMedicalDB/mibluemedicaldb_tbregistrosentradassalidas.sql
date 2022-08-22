CREATE DATABASE  IF NOT EXISTS `mibluemedicaldb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mibluemedicaldb`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: mibluemedicaldb
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbregistrosentradassalidas`
--

DROP TABLE IF EXISTS `tbregistrosentradassalidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbregistrosentradassalidas` (
  `ReES_Id` int NOT NULL AUTO_INCREMENT,
  `Vehi_Placa` varchar(10) DEFAULT NULL,
  `ReES_Entrada` datetime DEFAULT NULL,
  `ReES_Salida` datetime DEFAULT NULL,
  `ReES_MinEstadia` decimal(10,2) DEFAULT NULL,
  `ReES_ImportePagar` decimal(8,2) DEFAULT NULL,
  `ReES_Estado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`ReES_Id`),
  KEY `Vehi_Placa` (`Vehi_Placa`),
  CONSTRAINT `tbregistrosentradassalidas_ibfk_1` FOREIGN KEY (`Vehi_Placa`) REFERENCES `tbvehiculos` (`Vehi_Placa`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbregistrosentradassalidas`
--

LOCK TABLES `tbregistrosentradassalidas` WRITE;
/*!40000 ALTER TABLE `tbregistrosentradassalidas` DISABLE KEYS */;
INSERT INTO `tbregistrosentradassalidas` VALUES (1,'V1990','2022-08-21 10:15:50','2022-08-21 10:17:38',1.80,0.00,NULL),(2,'C1987','2022-08-21 10:18:23','2022-08-21 11:29:37',71.23,3.56,NULL),(3,'E1988','2022-08-21 11:04:04','2022-08-21 13:31:09',147.08,0.00,NULL),(5,'V1990','2022-08-21 11:27:22','2022-08-21 14:43:59',196.62,0.00,NULL),(6,'E1988','2022-08-21 14:54:35','2022-08-21 14:55:20',0.75,0.00,NULL),(7,'V1990','2022-08-21 14:58:13','2022-08-21 14:59:44',1.52,0.76,NULL),(8,'C1987','2022-08-21 15:05:00','2022-08-21 15:05:12',0.20,0.00,NULL),(9,'V1990','2022-08-21 15:07:06','2022-08-21 15:07:29',0.38,0.19,NULL),(10,'C1987','2022-08-21 15:07:45','2022-08-21 15:07:52',0.12,0.01,NULL),(11,'V1990','2022-08-21 15:09:42','2022-08-21 15:09:48',0.10,0.05,NULL),(12,'V1990','2022-08-21 16:19:49','2022-08-21 16:20:06',0.28,0.14,NULL);
/*!40000 ALTER TABLE `tbregistrosentradassalidas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-21 22:41:33
