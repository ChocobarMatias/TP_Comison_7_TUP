# Frontend - Sistema de Gestión de Donaciones

## Instalación

```bash
npm install
```

## Configuración

```bash
cp env.example .env
```

Define `VITE_API_URL` (por defecto `http://localhost:3001/api`).

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Credenciales

- Usuario: `admin`
- Contraseña: `1234`

## Nota

Asegúrate de que el backend real (Express + MySQL) esté corriendo y accesible en la URL definida por `VITE_API_URL` antes de usar la aplicación. El estado de sesión se gestiona con Zustand, sin uso de `localStorage`.

