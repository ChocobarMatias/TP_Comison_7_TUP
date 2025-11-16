🧾 Auditoría — Semana 3
Grupo Nº: X
Tema asignado: Sistema de Gestión de Biblioteca Escolar
Integrantes (Nombre completo + Legajo):

Avila Mateo — Legajo 61209

Agustín Berenguel — Legajo 61132

Agustín Monteros — Legajo 61210

Augusto Dip Flores — Legajo 61211

1) RELEVAMIENTO — Antes de comenzar a trabajar

Al abrir el proyecto correspondiente a la Semana 2, identificamos lo siguiente:

🔍 Errores detectados

Persistencia de sesión mediante localStorage, lo cual no cumple con los requisitos actuales.

Dependencia total de json-server para la API, sin backend real.

Algunos imports fallidos por reorganización previa de carpetas.

Advertencias en consola de React (keys faltantes en listas y estados no controlados).

Servicios HTTP apuntando únicamente al puerto 4000 sin flexibilidad.

Falta total de:

modelos

controladores

rutas

archivo .env

middleware de autenticación

El login seguía siendo una simulación sin validación real.

Sin manejo de estado global profesional (Zustand no implementado).

Ausencia de documentación sobre cómo correr backend + frontend.

📁 Problemas de estructura, naming y git

Integrantes modificando directamente la rama main.

Combinación de archivos de semanas anteriores dentro del proyecto.

Falta de .gitignore adecuado para el backend.

Componentes con nombres inconsistentes y carpetas sin uso.

Este relevamiento fue realizado antes de comenzar la migración al entorno Full Stack.

2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO
✅ Soluciones aplicadas a problemas detectados

Creación de una estructura backend completa en la carpeta /backend.

Instalación y configuración de dependencias:

express, mysql2, cors, helmet, morgan, dotenv, jsonwebtoken.

Implementación del archivo .env para variables sensibles.

Eliminación definitiva de json-server del flujo del proyecto.

Eliminación completa del uso de localStorage.

Corrección de imports obsoletos.

Separación correcta entre frontend y backend.

Flujo Git ordenado mediante ramas individuales para cada integrante.

✅ Nuevos requerimientos de Semana 3 agregados

Conexión real a MySQL mediante mysql2.

Creación del archivo base_datos.sql con estructura de la tabla usuarios.

Implementación de un backend funcional con:

rutas

controladores

modelos

middlewares

Endpoint POST /api/auth/login funcionando con:

validación en MySQL

verificación de contraseña

generación de JWT

Integración del frontend con el backend mediante fetch real.

Implementación de Zustand en /frontend/src/store/userStore.js para manejar:

usuario logueado

nombre

rol

Reemplazo completo de servicios HTTP para apuntar a http://localhost:3001.

📝 Observaciones finales (opcional)

El equipo trabajó de forma organizada utilizando ramas individuales, integradas por el líder.

Hubo una buena coordinación para evitar conflictos entre frontend y backend.

El proceso de migración se realizó de forma progresiva para no romper funcionalidades previas.