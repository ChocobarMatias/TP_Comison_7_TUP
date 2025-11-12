# Sistema de Gestión de Donaciones para ONG

Este proyecto está dividido en dos partes: **backend** y **frontend**.

## 🏗️ Estructura del Proyecto

```
gestion-donaciones/
├── backend/          # API REST Node.js + Express + MySQL
│   ├── config/       # Conexión a la base de datos
│   ├── controllers/  # Lógica de negocio
│   ├── routes/       # Rutas y endpoints
│   ├── middleware/   # Middlewares (auth JWT)
│   ├── base_datos.sql# Script para crear la base de datos MySQL
│   └── index.js      # Punto de entrada del servidor
└── frontend/         # Aplicación React
    ├── src/          # Código fuente
    ├── public/       # Archivos públicos
    └── package.json
```

## 🚀 Inicio Rápido

### 0. Requisitos

- MySQL 8+ en ejecución.
- Node.js 20+ y npm.
- Crear un archivo `.env` dentro de `backend/` basado en `env.example`.
- Ejecutar el script `base_datos.sql` para crear la base y los datos iniciales.

### 1. Backend (API REST)

```bash
cd backend
npm install
npm run dev
```

El servidor estará en: `http://localhost:3001` y expone la API en `/api`.

Variables de entorno esperadas (`backend/.env`):

```
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=gestion_donaciones
JWT_SECRET=clave_super_secreta
```

### 2. Frontend (Vite + React)

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

La aplicación estará en: `http://localhost:5173` (o el puerto que asigne Vite).

Variables de entorno (`frontend/.env`):

```
VITE_API_URL=http://localhost:3001/api
```

## 🔐 Credenciales

- **Usuario:** `admin`
- **Contraseña:** `1234`

## 📋 Scripts Disponibles

### Backend
- `npm run dev` - Levanta el servidor con nodemon
- `npm start` - Levanta el servidor en modo producción

### Frontend
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run lint` - Ejecuta el linter
- `npm run preview` - Previsualiza la build

## 🛠️ Tecnologías

- React 19
- React Router DOM 7
- React Bootstrap
- Vite
- Zustand
- Express
- MySQL
- JWT
- Bootstrap Icons
- React Icons
