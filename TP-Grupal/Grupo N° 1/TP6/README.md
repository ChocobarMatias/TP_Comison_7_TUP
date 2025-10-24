
# Integrantes Del Proyecto Y Roles
- Sonzogni Ramiro - Lider
- Varela Luciano Merce - Colaborador
- Agustin Monrroy - Colaborador
- Luciana Paz - Colaborador

# Componentes
- ArtistasCard.jsx: Modal para visualizar información de Artistas.
- AsistenteCard.jsc: Modal Para Asistentes
- EventCard.jsx: Modal Para Eventos
- DashboardComponent.jsx: Funciona como menu principal del sistema
- FormLogin.jsx: Login simulado con localStorage usando useState y useEffect
- Tabla.jsx: Componente reutilizable que muestra datos en formato de tabla.

# Pages
Inicio.jsx: Contiene un login simulado con usuario y contraseña precargados
      * Usuario@gmail.com
      * 123456
Al iniciar sesion, los datos se guardan en un localStorage. (En caso de olvidarse, el usuario y la clave, se encuentran en utils.js)

DashBoard: 
- Esta conectado mediante React-Router a las otras paginas (artistas,asistenes y eventos) 
- funciona con un .map que genera dinamicamente un bloque para cada categoria 
- dichas categorias deben estar puestas en una constante llamada "menu" y deben contener una id, un titulo y un path.

DashBoard/Artistas.jsx: 
- Muestra una tabla basada en datos definidos en utils/utils.js.
- Permite agregar artistas (datos temporales, no persistentes).
- Los registros se eliminan al recargar la página.
- Incluye botones de “Ver detalles” y “Eliminar” (funciones aún no implementadas).
- Usa Outlet para mostrar contenido dinámico en la parte derecha de la vista.

DashBoard/Asistentes.jsx: 
- Similar a Artistas.jsx, pero orientado a asistentes.
- Permite agregar asistentes temporales.
- Los datos se pierden al reiniciar la página.
- Incluye botones de “Ver detalles” y “Eliminar” sin funcionalidad implementada.

DashBoard/Eventos.jsx: 
- Similar a las secciones anteriores.
- Permite agregar eventos temporales.
- Incluye los mismos botones de acción sin funcionalidad implementada.

# Utils 
- El archivo utils/utils.js contiene una base de datos simulada en una constante llamada db.
- Dentro de db se almacenan tres colecciones (artistas, eventos, asistentes)
- También incluye funciones para acceder y manipular estos datos localmente.

# App.jsx
- Administra todas las rutas de la aplicación con React Router.
- La ruta principal (/) redirige al Login.
- Un router padre muestra un mensaje inicial cuando no hay ruta hija seleccionada.
- Los routers hijos están conectados a las páginas (Asistentes, Eventos, Artistas)
- El contenido de las páginas se renderiza a la derecha gracias al componente Outlet.

# Observaciones
- El Modal podría volverse reutilizable para todos los tipos (artista, evento, asistente).
- Las funciones de Eliminar y Ver detalle no están implementadas.
- La función Agregar actualmente ingresa datos temporales (se pierden al recargar).