# PROYECTO: Sistema de Gestión de Peluqueria
**Grupo N° 5 — Comisión 7 — UTN FRT**

## Integrantes
- Toranzo Fabricio Luciano  LIDER  (components / pages / constants/ utils/ endpoints)
- Ibañez Lucas Benjamin  INTEGRANTE  (Dashboard / layout/ router / store / styles)


# Roadmap de Desarrollo (Semana 1)

  Requisitos	                                               

 - Configuración de proyecto con Vite + React		
 - Implementación de Login simulado con localStorage		
 - Creación de Dashboard y estructura de páginas base	
 - Estilos y maquetado con React Bootstrap
 - Integración de flujo Git colaborativo		
 - Preparación del README grupal	

  Descripción Estado

 - Inicialización, estructura de carpetas y dependencias.
 - Validación de usuario/contraseña “admin /1234”.
 - Uso de useState + useEffect con datos fake.	
 - Aplicado a formularios, tablas y tarjetas.
 - Ramas, merge en dev, PR final al profesor.
 - Documentación completa del TP.	


# Estructura del Proyecto

src/
 ├─ components/
 │   ├─ Sidebar.jsx
 │   ├─ ClientForm.jsx
 │   ├─ ServiceForm.jsx
 │   ├─ AppointmentForm.jsx
 │   └─ DataTable.jsx
 ├─ pages/
 │   ├─ Login.jsx
 │   ├─ Dashboard.jsx
 │   ├─ Clients.jsx
 │   ├─ Services.jsx
 │   └─ Appointments.jsx
 ├─ layout/
 │   └─ MainLayout.jsx
 ├─ router/
 │   ├─ AppRouter.jsx
 │   └─ RouterProtect.jsx
 ├─ store/
 │   └─ userStore.js
 ├─ utils/
 │   ├─ fakeData.js
 │   └─ date.js
 ├─ constants/
 │   └─ index.js
 ├─ endpoints/
 │   └─ index.js
 ├─ styles/
 │   ├─ Sidebar.css
 │   ├─ Layout.css
 │   ├─ Login.css
 │   └─ Dashboard.css
 └─ App.jsx


# Justificación de la cantidad de pages planificadas

Se definieron cinco páginas principales, que representan los módulos base del sistema:


 - Login.jsx: Simula el acceso al sistema con validación en localStorage.
 - Dashboard.jsx: Vista principal con indicadores generales y resumen del sistema.
 - Clients.jsx: Módulo para visualizar y gestionar los clientes registrados.
 - Services.jsx: Módulo para administrar los servicios ofrecidos y sus precios.
 - Appointments.jsx: Módulo para listar y controlar los turnos con fecha y hora.


# Lista de Componentes Reutilizables previstos

  Sidebar.jsx	           
 - Función:Panel lateral con botones de navegación.
 - Reutilización: Se usa en todo el MainLayout.	     

  DataTable.jsx	
 - Función: Tabla dinámica con columnas y datos configurables.	
 - Reutilización: Reutilizada en Clientes, Servicios y Turnos.

  MainLayout.jsx	
  
 - Función: Contenedor principal del sistema con encabezado y contenido dinámico.	
 - Reutilización: Reutilizado como estructura general del Dashboard.


## Tecnologías
React + Vite + React Bootstrap


## Flujo Git
1. Lider crea el fork y rama `dev`
2. Integrantes clonan el fork del lider
3. Cada uno trabaja en su rama `Nombre_Legajo`
4. Pull request a `dev`
5. Merge final → `main`


# Guía para actualizar el fork del líder

Si el fork del líder ya existía:

```bash
git remote add upstream https://github.com/ChocobarMatias/TP_Comison_7_TUP.git
git fetch upstream
git checkout main
git merge upstream/main
git push origin main