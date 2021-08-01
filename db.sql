CREATE DATABASE  IF NOT EXISTS `pollution` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pollution`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: pollution
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `idreport` int NOT NULL AUTO_INCREMENT,
  `reportDate` varchar(50) NOT NULL,
  `image` varchar(500) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `description` varchar(1000) NOT NULL,
  PRIMARY KEY (`idreport`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
INSERT INTO `report` VALUES (4,'7/30/2021','1627649674793.jpg','Peshawar','Pakistan','all the city','Peshawar è la seconda città più inquinata al mondo. Le emissioni di diossido di carbonio raggiungono le 23 parti per milione mentre il limite stabilito dal WHO e di 10 PPM.'),(5,'7/30/2021','1627651032536.jpg','Linfen','China','all the city',' Al primo posto al mondo si trova Linfen. Questa città si trova nel cuore dell’industria del carbone della Cina. E’ triste pensare che questa città era una volta conosciuta come “la città dei fiori e dei frutti”. Respirare la sua aria equivale a fumare tre pacchetti di sigarette al giorno.'),(6,'7/30/2021','1627651319086.jpg','Chernobyl','Ukraine','Pryp\"jat Square','Parco giochi di Chernobyl, Pryp\"jat. Nonostante siano passati molti anni dall’incidente nella centrale nucleare del 1986, la qualità dell’aria resta ancora pessima e dannosa per la salute. Per fortuna la città è praticamente disabitata. Il materiale radioattivo è ancora presente nel suolo.'),(7,'7/30/2021','1627651825783.jpg','Zabol','India','بولوار','Dove c’è estrema povertà l’inquinamento è un fattore inevitabile purtroppo. Zabol, una città situata nel’Iran Orientale, è conosciuta per l’alto tasso di povertà e l’inquinamento dell’aria. La città deve affrontare un fenomeno conosciuto come “i 120 giorni di vento” che porta una grande quantità di polvere e sabbia. Zabol ha anche un livello molto alto di polveri sottili che rende la vita ai suoi abitanti molto difficile ed è una sfida restare in buona salute.'),(8,'7/30/2021','1627652389335.jpg','Kabwe','Zambia','Chilubi Island Ave','Questa città dello Zambia ha un livello di inquinamento da piombo molto alto e oltre 300000 persone ne risentono ogni giorno. La cosa peggiore è che i bambini sono specialmente vulnerabili e quelli più colpiti. Le miniere di Piombo e le numerose concerie hanno completamente cambiato le condizioni del suolo e dell’aria nella città negli ultimi 90 anni rendendola così inquinata che ci sono poche speranze che le cose possano cambiare un giorno.');
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-01 20:57:35
