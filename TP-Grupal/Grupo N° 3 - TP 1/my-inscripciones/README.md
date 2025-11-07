# 🧩 TP — Semana 1  
**Tecnicatura Universitaria en Programación — Comisión 7 -Semana 2**

## 👥 Grupo 6
**Integrantes:**  
- Carrizo Cyntia  
- Luis Agustín Correa Núñez  

---

## 📦 Instalación del proyecto

### 1️⃣ Crear carpeta para clonar el repositorio
Abrimos la terminal y ejecutamos:

```bash
mkdir repo-clonado
cd repo-clonado
git clone git@github.com:CyntiaCarrizo/TP_Comison_7_TUP.git

----------------------------------
```
###  2️⃣ Ingresar al proyecto clonado
```bash
cd TP_Comison_7_TUP/
cd TP-Grupal

Dentro de la carpeta TP-Grupal se encuentran los distintos grupos de la comisión.
Nuestro grupo es el Grupo N° 6.
---------------------------------
```
### 3️⃣ Abrir en Visual Studio Code
``` bash
code .
----------------------------------
En el explorador de VS Code, ubicamos la carpeta Grupo N° 6, hacemos clic derecho sobre ella y elegimos
👉 “Abrir en una nueva terminal”
```
### 4️⃣ Navegar hasta la carpeta del proyecto React
``` bash 
ls
cd my-inscripciones
El comando ls permite visualizar los archivos y carpetas disponibles dentro del grupo.
----------------------------------
```
### 5️⃣ Instalar dependencias
Dentro de la carpeta my-inscripciones, ejecutamos:
``` bash
npm install

Este comando descarga e instala todas las dependencias necesarias del proyecto, generando la carpeta node_modules.
--------------------------------
```
### 6️⃣ Iniciar el servidor de desarrollo
``` bash
npm run dev

Al ejecutar este comando, se mostrara una direccion similar a:
```
 shell
> Local: http://localhost:5173/

Podes copar  ese enlace y abrirlo en tu navegador para visualizar el proyecto en funcionamiento.
```
-------------------------

🧰 Tecnologías utilizadas

* React + Vite

* React Bootstrap

* JavaScript (ES6)

* HTML / CSS

* Node.js + npm

```
`` 📚 Descripción general

Este proyecto corresponde al Trabajo Práctico Semana 1 solicitado por el profesor Chocobar Matías, cuyo objetivo es dejar lista la estructura base del sistema React, aplicando:

Arquitectura de carpetas completa.

Login simulado con LocalStorage.

Dashboard inicial con datos falsos.

React Bootstrap aplicado en tablas y formularios.

Router configurado con archivo RouterProtect.jsx.

Flujo de trabajo colaborativo con Git y GitHub.``

🔄 Flujo de trabajo Git

Cyntia Carrizo realizó el fork del repositorio original del profesor.

Luis Agustín Correa Núñez trabajó en una rama propia basada en la rama CyntiaCarrizo.

Cada integrante realizó push de sus cambios y posteriormente se integraron al repositorio principal del grupo.
 
 ``` 
 --------------------------------
 ✅ Estado actual

 Estructura de carpetas creada.

 Login simulado funcionando.

 Dashboard con datos simulados.

 Router configurado y protegido.

 React Bootstrap implementado.

 Flujo GIT colaborativo aplicado.
 ```
Autenticación (login simulado)

Usuario administrador de prueba:

Email: admin@academy.com

Contraseña: admin123




# Auditoría Semana 2 – Grupo 3 – Comisión 7

## 🧾 REPORTE ANTES DE TRABAJAR

- El archivo `App.jsx` estaba redundante con `main.jsx`, generando confusión sobre el punto de entrada de la aplicación.
- El flujo de autenticación estaba dividido entre `useLocalStorage` y `AuthContext`, lo que provocaba duplicidad y posibles desincronizaciones del `localStorage`.
- La función `fakeLogin` solo validaba el símbolo “@” en el email, lo que hacía que fallara la experiencia de login en algunos casos.
- No existía manejo de rutas “no encontradas” (404).
- Faltaban pequeñas validaciones en las funciones de inscripción para evitar duplicados.
- Aún no se habían incorporado hooks personalizados para manejo de peticiones simuladas (`useFetch` / `useService`).

---

## 🧩 REPORTE DE SOLUCIONES + NUEVO AGREGADO

- Se centralizó la autenticación dentro de `AuthContext`, asegurando persistencia de sesión y sincronización entre pestañas.
- Se implementó correctamente `RouterProtect` para proteger rutas privadas (`Dashboard`, `Courses`, `Students`, `Enrollments`).
- Se organizó el proyecto con `MainLayout` y `AdminLayout` para separar la vista pública del área administrativa.
- Se configuró `react-router-dom` con redirección inicial y rutas privadas.
- Se mejoró la estructura modular de carpetas: `pages/`, `router/`, `context/`, `hooks/`, `services/`.
- Se agregaron servicios simulados (`addCourse`, `addStudent`, `addEnrollment`) persistidos en `localStorage` a modo de `json-server` local.
- Se añadió sincronización del login con `localStorage` mediante el contexto global (`AuthContext`).
- Se mejoró la validación de inscripciones y el control de cupos.
- Se dejó preparada la base para conectar con `json-server` o API REST fake.
- Se actualizó el módulo de autenticación con credenciales reales (`admin@academy.com` / `admin123`), simulando un flujo de login más verosímil.
- Se implementó redirección automática al login luego de cerrar sesión, optimizando la UX.
- Se añadieron mensajes de depuración (`console.log` / `console.warn`) para validar el flujo de autenticación durante el desarrollo.
- Se consolidó el flujo de cierre de sesión en `AdminLayout`, garantizando limpieza del contexto y del almacenamiento local.

## ✅ Checklist final

| Requisito | Estado |
|------------|---------|
| `react-router-dom` instalado y configurado | ✅ |
| Rutas públicas y privadas funcionales | ✅ |
| Contexto de autenticación (`AuthContext`) | ✅ |
| Hook personalizado (`useLocalStorage`, `useFetch`) | ✅ |
| json-server / simulador local configurado | ✅ |
| Carpeta `services/` con funciones HTTP fake | ✅ |
| Archivo `Auditoria_Semana_2.md` creado | ✅ |
| Merge `Dev → main` sin conflictos | 🔄 (a realizar por el líder) |

---

## 👥 Integrantes
- Mateo Ávila  
- Augusto Dip Flores  
- Agustín Berenguel  
- Agustín Monteros  
