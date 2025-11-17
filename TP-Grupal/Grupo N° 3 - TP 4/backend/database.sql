-- ==============================================
--   BASE DE DATOS DEL SISTEMA BIBLIOTECARIO
-- ==============================================
CREATE DATABASE biblioteca;
USE biblioteca;

-- ==============================================
--                   TABLA USUARIOS
-- ==============================================
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(30) DEFAULT 'user'
);

-- ==============================================
--                   TABLA ALUMNOS
-- ==============================================
CREATE TABLE alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    dni VARCHAR(20) NOT NULL,
    email VARCHAR(150),
    telefono VARCHAR(50),
    CONSTRAINT uc_dni UNIQUE (dni)
);
--                   TABLA LIBROS
-- ==============================================
CREATE TABLE libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    categoria VARCHAR(150),
    cantidad INT DEFAULT 0,
    cantidadDisponible INT DEFAULT 0
);

-- ==============================================
--                   TABLA PRESTAMOS
-- ==============================================
CREATE TABLE prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    libroId INT NOT NULL,
    alumnoId INT NOT NULL,
    fechaPrestamo DATE NOT NULL,
    fechaDevolucion DATE NOT NULL,
    
    FOREIGN KEY (libroId) REFERENCES libros(id) ON DELETE CASCADE,
    FOREIGN KEY (alumnoId) REFERENCES alumnos(id) ON DELETE CASCADE
);
-- ==============================================
--                   TABLA AUDITORIA
-- ==============================================
CREATE TABLE auditoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    accion VARCHAR(255) NOT NULL,
    usuario VARCHAR(150),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

