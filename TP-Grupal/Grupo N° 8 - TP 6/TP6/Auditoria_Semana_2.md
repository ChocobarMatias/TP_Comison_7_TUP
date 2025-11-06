# 🧾 Auditoría — Semana 2  
### Grupo Nº: 8  
### Tema asignado: t6
### Integrantes (Nombre completo + Legajo):
- Benitez Gabriel - 61682
- Diaz Vega Facundo - 61760
- Ruiz Franco  - 61454

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

- Ningun error visual se a visto, ni advertencia, vimos algunos titulos de cada vista se cambio
- la carpeta estaba completa, y bien estructurada
- los erroes que se vio en la persistencia de datos, los datos se perdian al actualizar la pagina, los botones de ver detalles y eliminar no funcionaban

> Este apartado debe completarse **ANTES** de modificar el código.

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados
- Se corrigió el handler de eliminación en Asistentes.jsx para que llame correctamente a la función deleteById de utils.js.
- Se mejoró deleteById para que al eliminar un artista o asistente, también se elimine de todos los eventos en los que estaba inscrito/asociado (integridad de datos).
- Se modificó el modal de "Gestionar Evento" para incluir dos nuevas secciones (visibles solo en modo edición).
- Se implementó la lógica para asociar y desasociar Artistas a un evento, consumiendo la lógica de utils.js.
- Se añadió la sección para inscribir y remover Asistentes a un evento.
- El formulario deshabilita el botón de inscripción de asistentes cuando el evento alcanza su cupo máximo.

-Persistencia de Datos: El código inicial perdía toda la información al recargar la página. La solución fue reescribir utils.js para usar localStorage, garantizando que todos los datos (eventos, artistas, asociaciones) se guarden permanentemente en el navegador.

Botones Inactivos: Los botones "Ver Detalle" y "Eliminar" originalmente no tenían ninguna función. Se implementó toda la lógica para que "Ver Detalle" abra un modal de edición y "Eliminar" borre el registro correspondiente, previa confirmación del usuario.

### ✅ Nuevos requerimientos de Semana 2 agregados
- Funcionalidad de Edición (CRUD): Se construyó desde cero la capacidad de editar cualquier artista, evento o asistente a través de los modales de "Ver Detalle", completando así las operaciones básicas de un sistema (Crear, Leer, Actualizar y Eliminar).

Sistema de Asociación Artista-Evento: Se desarrolló toda la funcionalidad para gestionar la relación entre artistas y eventos, incluyendo:

Asignar y Quitar: Se pueden añadir y remover artistas desde el modal de un evento.

Control de Disponibilidad: Se creó un estado "Disponible" / "Ocupado" para los artistas, que se gestiona automáticamente y previene dobles asignaciones.

Control Manual de Disponibilidad: Se añadió un nuevo control (interruptor) en el modal de edición del artista que permite al administrador cambiar manualmente su estado de disponibilidad.

Mejora en la Experiencia de Usuario: En lugar de mensajes ocultos en la consola, el sistema ahora muestra alertas visuales (alert) al usuario para notificarle sobre errores o acciones (ej: "Este artista ya está asignado").
>>>>>>> 0a896000ba9b4cc4186d3bd5653d7e9e20e30ead

- Comentarios sobre el flujo de trabajo, dificultades o acuerdos del equipo.
