# Sistema de Reservas Médicas

Esta aplicación proporciona una configuración mínima para trabajar con React en Vite con HMR y algunas reglas de ESLint.

Actualmente, hay dos plugins oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) (o [oxc](https://oxc.rs) cuando se usa en [rolldown-vite](https://vite.dev/guide/rolldown)) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

## Compilador de React

El Compilador de React no está habilitado en esta plantilla debido a su impacto en el rendimiento de desarrollo y construcción. Para agregarlo, consulta [esta documentación](https://react.dev/learn/react-compiler/installation).

## Expandiendo la configuración de ESLint

Si estás desarrollando una aplicación de producción, recomendamos usar TypeScript con reglas de linting conscientes del tipo habilitadas. Consulta la [plantilla TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para obtener información sobre cómo integrar TypeScript y [`typescript-eslint`](https://typescript-eslint.io) en tu proyecto.

## JSON-server — Resumen rápido

Si necesitás probar el frontend sin un backend real, usamos un mock con `json-server` que se basa en `db.json`.

- Ir a la carpeta del proyecto:
```bash
cd "TP-Grupal/Grupo N° 4 - TP 2/sistema-reservas-medicas"
```
- Instalar dependencias (si no están):
```bash
npm install
```
- Arrancar el servidor mock:
```bash
npm run api:json-server
```
Esto levanta la API en `http://localhost:3001` con endpoints como `/pacientes`, `/doctores`, `/citas`, `/especialidades` y `/horarios`.

Ejemplos rápidos:
```bash
curl http://localhost:3001/pacientes
curl "http://localhost:3001/citas?doctorId=1"
```

Nota: json-server persiste cambios directamente en `db.json` al hacer POST/PUT/DELETE; coordinen con el equipo si van a commitear esos cambios.
