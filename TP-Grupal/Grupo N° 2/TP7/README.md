# Proyecto Front-End: [Nombre del Gimnasio o Sistema, ej: TeraGestion]

Este repositorio contiene el código fuente del front-end para el sistema de gestión, desarrollado con React.

Este documento sirve como guía central del proyecto, detallando los integrantes, la arquitectura de la aplicación y la metodología de trabajo utilizada.

**Líder de Equipo:** Thomas Zavalia

---

## 1. Integrantes y Roles

El equipo se ha estructurado con roles definidos para asegurar una cobertura completa del desarrollo inicial:

* **Thomas Zavalia (Líder de Equipo / Arquitecto)**
    * **Legajo:** `61055`
    * **Responsabilidades:**
        * Estructuración inicial del proyecto (scaffolding) y organización de carpetas.
        * Definición de la arquitectura base: `react-router-dom`, `Context API` para autenticación.
        * Control de calidad, revisión de código (Code Review) y merge de Pull Requests (PRs).
        * Gestión de las ramas `dev` y `main`.

* **Mateo Santillan (Desarrollador Front-End)**
    * **Legajo:** `61254`
    * **Responsabilidades:**
        * Desarrollo integral de la página de `/login`.
        * Implementación del formulario de inicio de sesión y su lógica contra el `AuthContext`.

* **German Davalos Lucas (Desarrollador Front-End)**
    * **Legajo:** `61155`
    * **Responsabilidades:**
        * Desarrollo de la página principal `/dashboard`.
        * Maquetación del `MainLayout` (incluyendo Sidebar/Navbar).
        * Creación de componentes de visualización de datos (Cards, Tabla de usuarios).

---

## 2. Justificación de Cantidad de Pages Planificadas

Para esta primera entrega, hemos planificado **2 (dos) páginas (vistas) principales**:

1.  **/login (Página de Login):** Es la vista pública y el punto de entrada a la aplicación. Su función es validar al usuario.
2.  **/dashboard (Página de Dashboard):** Es la vista privada principal que se muestra al usuario tras un inicio de sesión exitoso. Funciona como el "home" de la sección administrativa.

**Justificación:**
Nos hemos enfocado en estas dos vistas para construir un **Producto Mínimo Viable (MVP)** que valide el flujo de autenticación completo (Ruta pública -> Autenticación -> Ruta privada protegida).

Esta base nos permite tener un sistema seguro desde el inicio. Futuras páginas (ej. `/gestion-usuarios`, `/perfil`, `/reportes`) se añadirán de forma modular dentro del layout principal ya establecido por el Dashboard.

---

## 3. Lista de Componentes Reutilizables Previstos

Para mantener un código limpio, escalable y consistente (principio DRY), hemos planificado y/o implementado los siguientes componentes reutilizables:

* **`MainLayout.jsx`:** Componente "envoltorio" (wrapper) para todas las rutas privadas. Contiene la estructura visual principal e incluye el `Sidebar` y el `Navbar`.
* **`Sidebar.jsx`:** Menú de navegación lateral fijo.
* **`Navbar.jsx` (o `Header.jsx`):** Barra de navegación superior, puede contener el título de la vista actual y el botón de logout.
* **`LogoutButton.jsx`:** Componente aislado que encapsula la lógica de "Cerrar Sesión" (llamada al `logout()` del `AuthContext`).
* **`CardComponent.jsx`:** Tarjeta reutilizable para mostrar métricas o resúmenes (ej. "Usuarios Activos"). Recibe `titulo`, `valor` e `icono` como props.
* **`TablaUser.jsx` (o `TablaGenerica`):** Componente que renderiza una tabla de datos. Recibe las columnas y la data (usuarios) a mostrar.
* **`ProtectedRoute.jsx`:** Componente de orden superior (HOC) que protege las rutas. Verifica si el usuario está autenticado; si no, redirige al `/login`.

---

## 4. Roadmap de Desarrollo (Sprint 1)

El desarrollo de esta primera fase se estructuró de la siguiente manera:

1.  **Fase 1: Configuración (Líder - Thomas)**
    * [x] Creación del repositorio y clonado del proyecto base.
    * [x] Sincronización del fork (si aplica) y creación de ramas `main` y `dev`.
    * [x] Configuración de `Vite` + `React`, `react-router-dom` y `bootstrap`.
    * [x] Estructuración de carpetas (pages, components, context, layout).
    * [x] Creación del `AuthContext` (con `localStorage`) y `AppRouter`.

2.  **Fase 2: Desarrollo de Vistas (Equipo)**
    * [x] **(Santillan):** Creación de rama `[legajo]-login` y desarrollo de la vista de Login.
    * [x] **(Davalos):** Creación de rama `[legajo]-dashboard` y desarrollo del Dashboard/Layout.

3.  **Fase 3: Integración y Entrega (Líder y Equipo)**
    * [x] **(Equipo):** Creación de Pull Requests (PRs) desde las ramas de feature hacia `dev`.
    * [x] **(Zavalia):** Revisión de código (Code Review) y merge de PRs a `dev`.
    * [x] Pruebas del flujo completo (Login -> Dashboard -> Logout).
    * [x] Merge de `dev` a `main` para estabilizar la versión.
    * [x] Creación de PR final desde `main` al repositorio del profesor.

---

## 5. Explicación del Flujo GIT Aplicado (Git Flow Simplificado)

Hemos implementado un flujo de trabajo basado en ramas (Feature Branch Workflow) para mantener la integridad del código y facilitar la colaboración.

* **Rama `main`:** Es la rama principal (producción). Está protegida. Contiene únicamente código estable y probado.
* **Rama `dev`:** Es la rama de integración. Todo el código nuevo debe pasar por `dev` antes de ser considerado para `main`.
* **Ramas de Feature (ej: `12345-crear-login`):**
    1.  Cada desarrollador (Mateo, Davalos) clona el repositorio del Líder (Thomas).
    2.  Para iniciar una nueva tarea, el desarrollador crea una nueva rama **a partir de `dev`**. 
    3.  El desarrollador trabaja y realiza *commits* en su rama local.
    4.  Al finalizar su tarea, sube su rama al repositorio (`git push origin 12345-login`).
    5.  Desde GitHub, crea un **Pull Request (PR) de su rama (`12345-login`) hacia `dev`**.
    6.  El Líder (Thomas) revisa el PR, aprueba los cambios y realiza el *merge*.
* **Proceso de Entrega:**
    1.  Una vez que todas las *features* están integradas y probadas en `dev`, el Líder crea un PR de `dev` hacia `main`.
    2.  Se mergea a `main`.
    3.  Se crea el PR final desde `main` (en el fork del líder) hacia el repositorio original del profesor.

---

## 6. Guía para Actualizar el Fork del Líder (Sincronización con "Upstream")

Para asegurar que nuestro repositorio (el fork) esté siempre actualizado con las últimas correcciones o cambios del repositorio principal del profesor (denominado "upstream"), el líder sigue estos pasos:

1.  **Configurar el Repositorio "Upstream" (Solo 1 vez):**
    Se añade el repositorio del profesor como un remoto.
    ```bash
    git remote add upstream https://github.com/ChocobarMatias/TP_Comison_7_TUP
    ```

2.  **Proceso de Sincronización (Periódicamente):**
    Antes de iniciar un nuevo ciclo de trabajo, se actualiza el fork.

    ```bash
    # 1. Asegurarse de estar en la rama 'main' local
    git checkout main

    # 2. Descargar todos los cambios del 'upstream' (profe)
    git fetch upstream

    # 3. Fusionar los cambios del 'main' del profe con el 'main' local
    git merge upstream/main

    # 4. Empujar (push) la rama 'main' actualizada al repositorio 'origin' (el nuestro)
    git push origin main
    
    # 5. Actualizar 'dev' con los nuevos cambios de 'main'
    git checkout dev
    git merge main
    git push origin dev
    ```