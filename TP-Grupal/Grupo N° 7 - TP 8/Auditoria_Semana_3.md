# 🧾 Auditoría — Semana 3  
### Grupo Nº: 7  
### Tema asignado: TP 8 – Sistema de Gestión de Donaciones para ONG 
### Integrantes (Nombre completo + Legajo):
- Lautaro Punta - 61302
- Facundo DiBerto - 61331
- Lautaro DiBerto - 61464

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

- Errores detectados (bugs, warnings, import fallidos, rutas rotas, etc.)
- Faltantes respecto a Semana 1 (carpetas vacías, componentes incompletos, etc.)
- Problemas de estructura, naming, uso de git o dependencias

> Este apartado debe completarse **ANTES** de modificar el código.

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados
- Correjimos unos errores de mayusculas en llamadas: `Sidebar` -> `SideBar`
`Style.css` -> `Styles.css`

### ✅ Nuevos requerimientos de Semana 2 agregados
- Faltaba completamente todos los requerimentos de la semana 2. Hemos agregado:
- Rutas privadas: Componente `PrivateRoute` que protege rutas usando localStorage
- Custom hooks: `useFetch` para peticiones GET y `useService` para ejecutar servicios
- json-server: Configurado con `db.json` y scripts en package.json (puerto 3001)
- Carpeta `services/`: Servicios HTTP completos para donantes, productos, entregas y donaciones (CRUD)
- Páginas actualizadas: Todas usan `useFetch` y servicios en lugar de datos hardcodeados

---

## Observaciones finales (opcional)
- Comentarios sobre el flujo de trabajo, dificultades o acuerdos del equipo.
