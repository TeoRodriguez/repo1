-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 31-08-2022 a las 17:58:04
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(8, 'dsadasioda', 'dasiodsadas', 'dsadasda', ''),
(4, 'Interna oficialista', 'blablablabla', 'Luego que trascendiera que la nueva presidenta del Banco Nación, Silvina Batakis, le pedirá a todo el directorio de la entidad que ponga su renuncia a disposición, Claudio Lozano cruzó a la ex ministra de Economía y dijo que quien tiene que pedir su salida es Alberto Fernández. \r\n\"Nos resulta extraño ese planteo. Nuestra renuncia, la mía y la de todos los directores está a disposición del Presidente\", expresó en diálogo con AM 750.\r\n\r\nLozano sostuvo que la reemplazante de Eduardo Hecker \"es una directora más\" a quien Alberto Fernández le encargó la tarea de presidir la entidad bancaria. Pero insistió en que quien tiene que pedir su renuncia y la del resto del directorio es Alberto Fernández, o el jefe de Gabinete, Juan Manzur.\r\n\r\nEl director del Nación dijo que los sorprendió la intención de Batakis y remarcó que no es lo que corresponde. \"No estoy atornillado al cargo, si el Presidente considera que me tengo que ir, con que me lo pidan alcanza\", agregó.', ''),
(10, 'sddasdas', 'dasdas', 'dasdas', NULL),
(5, 'prueba 54', 'prueba5454', 'prueba5454', NULL),
(6, 'sddasdas', 'daasdasd', 'dsadas', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'teo', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'pepe', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
