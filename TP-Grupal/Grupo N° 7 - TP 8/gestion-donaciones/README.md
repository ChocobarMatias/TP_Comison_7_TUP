# Sistema de Gestión de Donaciones para ONG

Este proyecto está dividido en dos partes: **backend** y **frontend**.

## 🏗️ Estructura del Proyecto

```
gestion-donaciones/
├── backend/          # API fake con json-server
│   ├── db.json      # Base de datos JSON
│   └── package.json
└── frontend/        # Aplicación React
    ├── src/         # Código fuente
    ├── public/      # Archivos públicos
    └── package.json
```

## 🚀 Inicio Rápido

### 1. Backend

```bash
cd backend
npm install
npm run server
```

El servidor estará en: `http://localhost:3001`

### 2. Frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

La aplicación estará en: `http://localhost:5173` (o el puerto que asigne Vite)

## 🔐 Credenciales

- **Usuario:** `admin`
- **Contraseña:** `1234`

## 📋 Scripts Disponibles

### Backend
- `npm run server` - Inicia json-server en el puerto 3001

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
- json-server
- Bootstrap Icons
- React Icons
