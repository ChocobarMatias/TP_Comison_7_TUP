import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((error) => {
  if (error) {
    console.log("❌ Error al conectar a MySQL:", error);
    return;
  }
  console.log("✅ Base de datos conectada exitosamente");
});

export default connection;
CREATE DATABASE stock_sucursales;
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=stock_sucursales
JWT_SECRET=clave_secreta_segura

USE stock_sucursales;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  rol ENUM('admin', 'empleado') NOT NULL
);

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(255),
  precio DECIMAL(10,2),
  stock INT NOT NULL
);
