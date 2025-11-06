PROYECTO: Sistema de Reservas para Consultorios Médicos
**Grupo N° 2 — Comisión 7 — UTN FRT**

## Integrantes y roles

| Nombre completo - Legajo  |
|------------------|---------|
| Lautaro Punta - 61302 - Líder del grupo |
| Facundo Di Berto - 61331 |
| Lautaro Di Berto - 61464 |

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

### Páginas implementadas actualmente:
1. **Home** - Página de bienvenida e información general
2. **Login** - Autenticación de usuarios (simulada)
3. **Dashboard** - Panel principal con resumen de turnos
4. **Gestión de Pacientes** - CRUD completo de pacientes
5. **Gestión de Médicos** - CRUD completo de médicos

### Funcionalidades implementadas:
- **Autenticación simulada** con localStorage
- **Dashboard interactivo** con datos simulados y gestión completa de turnos
- **Sistema de filtros avanzado** por fecha, especialidad, búsqueda y edad
- **Gestión completa de turnos** con acciones (confirmar, cancelar, eliminar, editar)
- **Validación de superposición de horarios** para evitar conflictos
- **Formularios completos** para crear y editar turnos, pacientes y médicos
- **Gestión de pacientes** con datos completos, obra social y validaciones
- **Gestión de médicos** con especialidades, horarios y turnos disponibles
- **Estadísticas en tiempo real** de turnos, pacientes y médicos
- **Router protegido** con autenticación
- **UI responsive** con React Bootstrap
- **Sistema de modales** reutilizable para formularios

## Lista de componentes reutilizables

### Componentes base implementados:
- **Button** - Botón personalizado con variantes
- **Layout** - Layout principal con Navbar y navegación
- **RouterProtect** - Protección de rutas con autenticación
- **Modal** - Componente reutilizable para modales

### Componentes específicos del dominio implementados:
- **Dashboard** - Panel principal con gestión completa de turnos
- **Login** - Formulario de autenticación simulada
- **Home** - Página de bienvenida
- **Pacientes** - Página de gestión de pacientes
- **Medicos** - Página de gestión de médicos
- **TurnoForm** - Formulario completo para turnos con validaciones
- **PacienteForm** - Formulario completo para pacientes con validaciones
- **MedicoForm** - Formulario completo para médicos con validaciones

### Componentes previstos para futuras iteraciones:
- **Card** - Tarjeta reutilizable para contenido
- **Table** - Tabla con funcionalidades de ordenamiento
- **Sidebar** - Menú lateral para navegación
- **TurnoCard** - Tarjeta individual de turno
- **MedicoSelector** - Selector de médicos por especialidad
- **CalendarioTurnos** - Vista calendario de turnos
- **FiltrosTurnos** - Filtros para búsqueda de turnos
- **Reportes** - Componentes para visualización de reportes

## Roadmap de desarrollo
1 - **Estructura base y flujo GIT** - Creación de la estructura base del trabajo práctico junto con las ramas: `main` y `dev` necesarias para el flujo colaborativo correcto - **Completado**
2 - **Login simulado y Dashboard inicial** - Implementación de autenticación simulada con localStorage y dashboard con datos simulados usando useState + useEffect - **Completado**
3 - **CRUD básico de turnos** - Gestión básica de turnos con filtros, búsqueda y acciones (confirmar, cancelar, eliminar) - **Completado**
4 - **CRUD completo de turnos médicos** - Desarrollo completo de gestión de turnos con validación de superposición de horarios y formularios de creación/edición - **Completado**
5 - **Gestión de pacientes** - Registro y administración completa de pacientes con formularios y validaciones - **Completado**
6 - **Gestión de médicos** - Administración completa de profesionales médicos con especialidades y horarios - **Completado**
7 - **Sistema de reportes** - Visualización de estadísticas y reportes del sistema - **Pendiente**
8 - **Integración y testing** - Testing de componentes y preparación para integración con backend - **Pendiente**

## Guía para actualizar el fork del líder

Si el fork del líder ya existía:

```bash
git remote add upstream https://github.com/ChocobarMatias/TP_Comison_7_TUP.git
git fetch upstream
git checkout main
git merge upstream/main
git push origin main