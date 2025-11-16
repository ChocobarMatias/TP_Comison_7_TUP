# Backend - API REST Node.js + MySQL

API real utilizada por el frontend de Gestión de Donaciones.

## 🚧 Requisitos previos

- MySQL 8+ en ejecución.
- Archivo `.env` configurado (usa `env.example` como base).
- Ejecutar el script `base_datos.sql` para crear la base y cargar datos iniciales.

## 🚀 Instalación

```bash
npm install
```

## ▶️ Uso

```bash
npm run dev
```

El servidor quedará disponible en `http://localhost:3001` y la API expuesta bajo `/api`.

Scripts disponibles:

- `npm run dev` → nodemon.
- `npm start` → node en modo producción.

## 🔐 Autenticación

- `POST /api/auth/login` → devuelve `{ token, user }`.
- `GET /api/auth/profile` → requiere `Authorization: Bearer <token>`, devuelve los datos del usuario autenticado.

Todos los endpoints (excepto login) exigen JWT válido.

## 📚 Endpoints principales

- `GET /api/donantes`
- `GET /api/donaciones`
- `GET /api/productos`
- `GET /api/entregas`

Cada recurso soporta operaciones CRUD (`POST`, `PUT`, `DELETE`) protegidas por autenticación.

## 🗄️ Base de datos

El script `base_datos.sql` crea las tablas:

- `usuarios` (credentiales con contraseña bcrypt)
- `donantes`
- `productos`
- `donaciones`
- `entregas`

Actualiza las credenciales del admin directo en la tabla `usuarios` si necesitas otros accesos.

