# 🧾 Auditoría — Semana 2  
### Grupo Nº: 2  
### Tema asignado: TP 10 Sistema de una peluqueria
### Integrantes (Nombre completo + Legajo):
- Zavalia Thomas 61055
- German Davalos Lucas 61155
- Santillan Mateo 61254

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Conflicto de Ruteo: react-router-dom esta instalado, pero implementado de forma incorrecta. AppRouter.jsx define rutas anidadas, pero MainLayout.jsx las ignora.

Navegación por Estado: MainLayout.jsx utiliza un useState (section) y una función renderSection() para mostrar las páginas. Esto anula el propósito del router, no actualiza la URL y no permite navegar por el historial.

Sidebar incorrecto: Sidebar.jsx usa una prop onSelect para actualizar el estado del layout, en lugar de usar el componente <Link> de react-router-dom para navegar por URL.

Ruta Privada Vacía: El archivo RouterProtect.jsx existe pero no contiene lógica de protección.

Consumo de Datos Estático: Todas las páginas leen datos de fakeData.js.

Formularios No Funcionales: Los formularios son solo visuales y no capturan la entrada del usuario.

Capa de Servicios: Existe una carpeta endpoints/ que usaremos como services/, pero está vacía.


## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados

- Conflicto de Ruteo Solucionado: Se eliminó por completo la navegación por useState y la función renderSection() del MainLayout.jsx.

- Implementación de <Outlet />: Se reemplazó la lógica anterior por el componente <Outlet /> de react-router-dom, logrando que MainLayout ahora renderice las rutas hijas definidas en AppRouter.jsx.

- Refactorización de Sidebar.jsx: Se eliminó la prop onSelect y se reemplazó por el componente <Link> de react-router-dom. Se utiliza el hook useLocation para determinar la ruta activa y aplicar los estilos correspondientes.

- Implementación de Ruta Privada: Se completó la lógica de RouterProtect.jsx. Ahora verifica la existencia de isLogged en localStorage y redirige al <Login /> si el usuario no está autenticado.

- Refactorización de Login.jsx: Se conectó la página de Login al router, eliminando props obsoletas. Ahora utiliza useNavigate para redirigir al /app/dashboard tras un inicio de sesión exitoso y guardar la sesión en localStorage.

- Eliminación de Datos Estáticos: Se eliminaron todas las importaciones y el uso de fakeData.js en todas las páginas (Clientes, Servicios, Turnos, Dashboard).

- Formularios Funcionales: Todos los formularios (ClientForm, ServiceForm, AppointmentForm) son ahora 100% funcionales. Utilizan useState para gestionar su estado y llaman a los servicios correspondientes al hacer submit.

- Implementación de Capa de Servicios: Se desarrolló la arquitectura de API completa:

- src/endpoints/: Almacena las constantes de las rutas (ej. /clients).

- src/services/: Contiene la lógica fetch (CRUD) para cada módulo (clientService.js, serviceService.js, appointmentService.js).

### ✅ Nuevos requerimientos de Semana 2 agregados

- json-server Configurado: Se configuró db.json en la raíz del proyecto (basado en fakeData, pero ampliado) y se añadió el script npm run server a package.json.

- Variables de Entorno: Se implementó un archivo .env en la raíz para almacenar la variable VITE_API_URL, que es consumida por src/services/apiConfig.js.

- Hook Personalizado useApi: Se creó el hook useApi.js que centraliza la lógica de estado de API (data, loading, error).

- Hook useAppointments: Se creó un hook especializado para el módulo de turnos, que maneja la lógica de negocio de Turnos y consume los servicios de Clients y Services para resolver los nombres.

- CRUD Completo :Se implementó el CRUD (Crear, Leer, Actualizar, Borrar) completo para los tres módulos: Clientes, Servicios y Turnos.

- Mejora de UX : Se refactorizó el hook useApi y los componentes para exponer y usar setData. Esto permite actualizar la UI instantáneamente al crear o editar, eliminando la necesidad de recargar la página (F5) y solucionando race conditions con json-server.

- Dashboard Funcional: Se refactorizó el Dashboard.jsx para que consuma los 3 servicios (getClients, getServices, getAppointments) y muestre métricas reales (cantidad total de cada módulo) en lugar de datos falsos.


---

## Observaciones finales (opcional)

- El equipo logró implementar el CRUD completo para los 3 módulos, cada integrante tuvo la tarea de hacer un modulo 

- Se solucionaron bugs complejos relacionados con la asincronía de json-server (actualizaciones que requerían F5) y el manejo de tipos de datos en los IDs (parseInt vs. IDs alfanuméricos como "813e"), logrando un CRUD estable.
