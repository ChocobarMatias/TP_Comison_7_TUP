# TP 4 – Sistema de Gestión de Biblioteca Escolar

App React para administrar **Libros**, **Alumnos** y **Préstamos**, con:
- Ruteo público/privado usando `react-router-dom`
- `json-server` como API fake (CRUD)
- Capa de servicios (`/src/services`) para peticiones HTTP simuladas
- Auditoría de movimientos (registro en `/audit`)
- Bootstrap + CSS modular
- Iconografía con `lucide-react`

---

## Requisitos previos

- Node 18+ y pnpm
- Puertos libres: **5173** (web) y **4000** (API)

---

## Instalación

```bash
pnpm i
pnpm i lucide-react
```
> Si no tenes pnpm: npm i -g pnpm

_______________________________________________________________

SCRIPTS
```bash
# API fake (json-server) en http://localhost:4000
pnpm run api

# Frontend (Vite) en http://localhost:5173
pnpm run dev

# Linter
pnpm run lint

# Build
pnpm run build
```
_______________________________________________________________
### Login:
    -El Login esta simulado: se valida que exista el email en db.json.
    -Iniciar sesion con el email de ejemplo: admin@escuela.edu (que figure en db,json)

    users:
        { "id": 1, "email": "admin@escuela.edu", "password": "1234", "role": "admin", "name": "Demo Admin" },
        { "id": 2, "email": "ana@escuela.edu", "password": "1234", "role": "user", "name": "Usuario" }


    

> Proximo hito: implementar validaciones de contrasena y bloquear rutas segun rol.

_______________________________________________________________
### Estructura de carpetas ENCONTRADO   

TP4/eslint.config.js
TP4/index.html
TP4/package.json
TP4/README.md
TP4/vite.config.js
TP4/src/App.css
TP4/src/App.jsx
TP4/src/index.css
TP4/src/main.jsx
TP4/src/components/
TP4/src/constants/
TP4/src/dashboard/
TP4/src/endpoints/
TP4/src/layout/
TP4/src/pages/
TP4/src/router/
TP4/src/store/
TP4/src/styles/
TP4/src/utils/

### ESTRUCTURA DE CARPETAS DE MOMENTO:

src/
  components/
    EmptyState.jsx
    Loader.jsx
    ProgressRing.jsx
    StatCard.jsx
    ThemeSwitcher.jsx
    DataTable.jsx
    BookStatHeader.jsx
    BarChart.jsx
    
  pages/
    About.jsx
    NotFound.jsx
    Libros/
    Alumnos/
    Prestamos/
  router/
    index.jsx
    RouterProtect.jsx
  services/
    audit.service.js
    books.service.js
    endpoints.js
    httpClient.js
    loans.service.js
    students.service.js
  styles/
    base/variables.css
    components/{cards.css,charts.css,login.css}
    theme.css

    -----------------------------------------
    >>Endpoints (json-server)
     * GET/POST/PATCH/DELETE /books
     * GET/POST/PATCH/DELETE /students
     * GET/POST/PATCH/DELETE /loans
     * POST /audit (registro de acciones)
    -----------------------------------------

### Flujo Git - Semana 2:
Líder

Actualiza fork con cambios del profe

Integra ramas de integrantes en dev

Merge dev → main

PR final al profe

Integrantes

No hacer fork nuevo

Trabajar en rama Nombre_Legajo

git push a su rama

Avisar al líder para integrar

Ejemplo de comandos (integrante):
```bash
git checkout -b AgustinCorrea_12345
git add .
git commit -m "feat(loans): alta y devolución con control de stock"
git push -u origin AgustinCorrea_12345
```
____________________________________________

### NOTAS ###

>Los estilos estan modularizados en src/styles
>La capa services abstrae la API para que en el futuro sea facil cambiar a un backend real.
Auditoria: cada accion relevante ( CREATE, UPDATE, DELETE, RETURN ) registra un item en /audit.



