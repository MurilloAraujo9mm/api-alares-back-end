CREATE DATABASE  IF NOT EXISTS `api_alares_backend` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `api_alares_backend`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: api_alares_backend
-- ------------------------------------------------------
-- Server version	5.7.43

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
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `token` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` (`id`, `username`, `password`, `email`, `last_login`, `token`, `createdAt`, `updatedAt`) VALUES (1,'murillo.araujo','123','murilloaraujog@gmail.com','2023-08-07 03:26:17','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMyIsImlhdCI6MTY5MTM3ODc3NywiZXhwIjoxNjkxMzgyMzc3fQ.-eYgRPsBzUwmlrqLDKBR4bIpmKo1CumAkTd7iMdeKqQ','2023-08-07 03:26:17','2023-08-07 03:26:17'),(2,'','','','2023-08-07 03:26:50','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IiIsImlhdCI6MTY5MTM3ODgxMCwiZXhwIjoxNjkxMzgyNDEwfQ.3tpiQgEhOJskVaUk3BJ05uTl7WUrT1letGILDMSZBhM','2023-08-07 03:26:50','2023-08-07 03:26:50'),(3,'murillo.araujo2','123','murillo.araujo@corebiz.ag','2023-08-07 03:31:59','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMyIsImlhdCI6MTY5MTM3OTExOSwiZXhwIjoxNjkxMzgyNzE5fQ.lu32psRIfm44_y4PJidPm-GZphihcCn1Jqzt30D7dLo','2023-08-07 03:31:59','2023-08-07 03:31:59');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_plan` int(11) DEFAULT NULL,
  `date_order` datetime NOT NULL,
  `hour_order` time NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id_order`),
  KEY `id_user` (`id_user`),
  KEY `id_plan` (`id_plan`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_plan`) REFERENCES `plans` (`id_plan`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`id_order`, `id_user`, `id_plan`, `date_order`, `hour_order`, `created_at`, `updated_at`) VALUES (1,35,3,'2023-08-04 16:22:40','13:22:40','2023-08-04 16:22:40','2023-08-04 16:22:40'),(2,36,2,'2023-08-04 17:31:06','14:31:06','2023-08-04 17:31:06','2023-08-04 17:31:06'),(3,37,2,'2023-08-04 22:58:31','19:58:31','2023-08-04 22:58:31','2023-08-04 22:58:31'),(4,38,1,'2023-08-06 16:19:37','13:19:37','2023-08-06 16:19:37','2023-08-06 16:19:37'),(5,39,2,'2023-08-06 16:19:48','13:19:48','2023-08-06 16:19:48','2023-08-06 16:19:48');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plans`
--

DROP TABLE IF EXISTS `plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plans` (
  `id_plan` int(11) NOT NULL AUTO_INCREMENT,
  `name_plan` varchar(255) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `details` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_plan`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plans`
--

LOCK TABLES `plans` WRITE;
/*!40000 ALTER TABLE `plans` DISABLE KEYS */;
INSERT INTO `plans` (`id_plan`, `name_plan`, `price`, `details`, `createdAt`, `updatedAt`) VALUES (1,'Vivo fibra ótica Combo Plus life',24.99,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make','2023-08-04 12:05:35','2023-08-07 00:43:09'),(2,'NET Super veloz + plus',585.99,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make','2023-08-04 16:15:32','2023-08-04 16:15:32'),(3,'Plano de internet móvel, giga super',60.99,'O melhor plano de internet do brasil, feito com exclusivadade para voce que precisa de velocidade, praticidade e agilidade no dia a dia /  veloz','2023-08-04 16:17:47','2023-08-04 16:17:47'),(4,'Combo plus',60.99,'O melhor plano de internet do brasil, feito com exclusivadade para voce que precisa de velocidade, praticidade e agilidade no dia a dia /  veloz','2023-08-04 16:19:04','2023-08-04 16:19:04');
/*!40000 ALTER TABLE `plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id_user`, `first_name`, `phone`, `email`, `created_at`, `updated_at`) VALUES (34,'Zilda','11953745737','zilda@gmail.com','2023-08-04 16:15:51','2023-08-04 16:15:51'),(35,'Pedro Silva a','11953745737','murilloaraujog@gmail.com','2023-08-04 16:22:40','2023-08-04 16:22:40'),(36,'murillo teste','11953745737','murilloaraujog@gmail.com','2023-08-04 17:31:06','2023-08-04 17:31:06'),(37,'murillo','11953745737','murilloaraujog@gmail.com','2023-08-04 22:58:31','2023-08-04 22:58:31'),(38,'José Pereira','11953745737','josepereira@gmail.com','2023-08-06 16:19:37','2023-08-06 16:19:37'),(39,'Mayza Dias ','1195374999','mayzadias_teste@gmail.com','2023-08-06 16:19:48','2023-08-06 16:19:48');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-07  0:45:33
