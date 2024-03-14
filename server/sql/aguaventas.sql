-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2024 a las 14:58:05
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aguaventas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras_aguacates`
--

CREATE TABLE `compras_aguacates` (
  `id_compra` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre_producto` varchar(50) NOT NULL,
  `tipo_producto` varchar(50) NOT NULL,
  `fecha_compra` date NOT NULL,
  `precio_producto` int(50) NOT NULL,
  `cantidad_prodcuctos` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras_productos`
--

CREATE TABLE `compras_productos` (
  `id_productos` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre_producto` varchar(50) NOT NULL,
  `tipo_producto` varchar(50) NOT NULL,
  `fecha_compra` date NOT NULL,
  `precio_producto` int(50) NOT NULL,
  `cantidad_prodcuctos` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_aguacates`
--

CREATE TABLE `productos_aguacates` (
  `id_agacates` int(11) NOT NULL,
  `nombre_aguacate` int(11) NOT NULL,
  `tipo_aguacate` int(11) NOT NULL,
  `precio_aguacate` int(11) NOT NULL,
  `img_aguacate` int(11) NOT NULL,
  `cantidad_prodcuctos` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_comerciales`
--

CREATE TABLE `productos_comerciales` (
  `id_productos` int(11) NOT NULL,
  `nombre_producto` int(11) NOT NULL,
  `tipo_producto` int(11) NOT NULL,
  `precio_proucto` int(11) NOT NULL,
  `img_producto` int(11) NOT NULL,
  `cantidad_prodcuctos` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuairo` int(11) NOT NULL,
  `nombre_tienda` varchar(50) NOT NULL,
  `nombre_propietario` varchar(50) NOT NULL,
  `cedula` int(11) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `numero_nit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compras_aguacates`
--
ALTER TABLE `compras_aguacates`
  ADD PRIMARY KEY (`id_compra`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `compras_productos`
--
ALTER TABLE `compras_productos`
  ADD PRIMARY KEY (`id_productos`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `productos_aguacates`
--
ALTER TABLE `productos_aguacates`
  ADD PRIMARY KEY (`id_agacates`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuairo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compras_aguacates`
--
ALTER TABLE `compras_aguacates`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compras_productos`
--
ALTER TABLE `compras_productos`
  MODIFY `id_productos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos_aguacates`
--
ALTER TABLE `productos_aguacates`
  MODIFY `id_agacates` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuairo` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compras_aguacates`
--
ALTER TABLE `compras_aguacates`
  ADD CONSTRAINT `compras_aguacates_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuairo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `compras_productos`
--
ALTER TABLE `compras_productos`
  ADD CONSTRAINT `compras_productos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuairo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
