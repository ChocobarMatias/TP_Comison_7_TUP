CREATE DATABASE IF NOT EXISTS gestion_donaciones CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE gestion_donaciones;

DROP TABLE IF EXISTS entregas;
DROP TABLE IF EXISTS donaciones;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS donantes;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  nombre_completo VARCHAR(120) NOT NULL,
  rol ENUM('admin', 'operador') NOT NULL DEFAULT 'operador',
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE donantes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  monto DECIMAL(12,2) NOT NULL,
  activo TINYINT(1) NOT NULL DEFAULT 1,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  cantidad INT NOT NULL,
  unidad VARCHAR(50) NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE donaciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  monto DECIMAL(12,2) NOT NULL,
  fecha DATE NOT NULL,
  estado ENUM('Pendiente', 'Completada', 'Cancelada') NOT NULL DEFAULT 'Pendiente',
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE entregas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(10) NOT NULL UNIQUE,
  contenido VARCHAR(255) NOT NULL,
  destino VARCHAR(255) NOT NULL,
  fecha_salida DATE NOT NULL,
  fecha_llegada DATE DEFAULT NULL,
  estado ENUM('pendiente', 'en_camino', 'entregado') NOT NULL DEFAULT 'pendiente',
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios (username, password_hash, nombre_completo, rol)
VALUES
  ('admin', '$2a$10$0A3nU2cXOCiVP6DRoPUy4u6WNRwZoK3KrLQSRgmdRCaDh8un3OWTa', 'Administrador General', 'admin');

INSERT INTO donantes (nombre, email, monto, activo) VALUES
  ('Laura Pérez', 'laura@gmail.com', 5000, 1),
  ('Carlos López', 'carlos@gmail.com', 2500, 0),
  ('María Torres', 'maria@gmail.com', 10000, 1),
  ('Agustin Berenguel', 'berenguel@gmail.com', 6000, 1),
  ('Mateo Avila', 'avila@gmail.com', 2500, 0),
  ('Agustin Monters', 'agustin@gmail.com', 10000, 1);

INSERT INTO productos (nombre, categoria, cantidad, unidad) VALUES
  ('Alimentos no perecederos', 'Alimentación', 50, 'cajas'),
  ('Útiles escolares', 'Educación', 100, 'kits'),
  ('Medicamentos', 'Salud', 30, 'cajas');

INSERT INTO donaciones (nombre, monto, fecha, estado) VALUES
  ('Campaña Invierno', 25000, '2025-10-10', 'Completada'),
  ('Donación Escolar', 12000, '2025-10-15', 'Pendiente'),
  ('Ayuda Social', 8000, '2025-10-20', 'Completada'),
  ('Recolección Médica', 15000, '2025-10-22', 'Pendiente'),
  ('Fondo Ambiental', 20000, '2025-09-30', 'Completada'),
  ('Donación de Emergencia', 5000, '2025-10-05', 'Pendiente');

INSERT INTO entregas (codigo, contenido, destino, fecha_salida, fecha_llegada, estado) VALUES
  ('D001', 'Cajas de alimentos no perecederos', 'Comedor Los Piletones', '2025-10-23', '2025-10-25', 'en_camino'),
  ('D003', 'Útiles escolares', 'Escuela Rural N° 45', '2025-10-20', '2025-10-21', 'entregado');

