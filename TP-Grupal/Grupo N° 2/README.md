PROYECTO: Sistema de Reservas para Consultorios Médicos
**Grupo N° 2 — Comisión 7 — UTN FRT**

## Integrantes y roles

| Nombre completo - Legajo - Rol en el proyecto |
|------------------|---------|--------------------|
| Lautaro Punta - 61302 - Líder del grupo - ROL|
| Facundo Di Berto - 61331 - ROL |
| Lautaro Di Berto - 61464 - ROL |

## Flujo GIT aplicado

## Líder (Lautaro Punta)
- Realiza el **fork** del repositorio del profesor.  
- Crea la rama `dev`.  
- Integra las ramas de los integrantes mediante *Pull Requests*.  
- Realiza el **merge final de `dev` → `main`**.  
- Envía el **Pull Request al profesor**.

## Integrantes
- Clonan el **fork del líder** (no el del profesor).  
- Crean su rama personal con formato:  
Nombre_Legajo

## Justificación de cantidad de pages planificadas

### Páginas principales identificadas:
1. **Home** - Página de bienvenida e información general
2. **Login** - Autenticación de usuarios (simulada)
3. **Dashboard** - Panel principal con resumen de turnos
4. **Gestión de Turnos** - CRUD completo de turnos médicos
5. **Gestión de Pacientes** - Registro y administración de pacientes
6. **Gestión de Médicos** - Administración de profesionales médicos
7. **Reportes** - Visualización de estadísticas y reportes

**Total: 7 páginas** - Cantidad justificada por la complejidad del sistema médico que requiere separación clara de responsabilidades.

## Lista de componentes reutilizables previstos

### Componentes base:
- **Button** - Botón personalizado con variantes
- **Card** - Tarjeta reutilizable para contenido
- **Table** - Tabla con funcionalidades de ordenamiento
- **Form** - Formularios con validación
- **Modal** - Ventanas modales para confirmaciones
- **Navbar** - Barra de navegación principal
- **Sidebar** - Menú lateral para navegación

### Componentes específicos del dominio:
- **TurnoCard** - Tarjeta individual de turno
- **PacienteForm** - Formulario de registro de pacientes
- **MedicoSelector** - Selector de médicos por especialidad
- **CalendarioTurnos** - Vista calendario de turnos
- **FiltrosTurnos** - Filtros para búsqueda de turnos

## Roadmap de desarrollo
1 - Estructura base y flujo GIT - Creacion de la estructura base del trabajo practico junto con las ramas:`main` y `dev` necesarias para el flujo colaborativo correcto - Completado
2 - Login simulado y Dashboard inicial - Implementacion de autenticacion simulada con localStorage y dashboard con datos simulados usando useState + useEffect - Completado
3 - CRUD de turnos médicos - Desarrollo completo de gestión de turnos con validación de superposición de horarios - Pendiente
4 - Gestión de pacientes y médicos - Registro y administración de pacientes y profesionales médicos - Pendiente
5 - Sistema de reportes - Visualización de estadísticas y reportes del sistema - Pendiente
6 - Integración y testing - Testing de componentes y preparación para integración con backend - Pendiente

## Guía para actualizar el fork del líder

Si el fork del líder ya existía:

```bash
git remote add upstream https://github.com/ChocobarMatias/TP_Comison_7_TUP.git
git fetch upstream
git checkout main
git merge upstream/main
git push origin main