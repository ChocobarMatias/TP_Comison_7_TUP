# 🧾 Auditoría — Semana 2  
### Grupo Nº: 5 
### Tema asignado: Control de Stock y Ventas para local de indumentaria 
### Integrantes (Nombre completo + Legajo):
- Toranzo Fabricio Luciano - 61615
- Ibañez Lucas Benjamín - 61995


---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

  Errores detectados (bugs, warnings, import fallidos, rutas rotas, etc.)

- Estructura mal armada e organizada.
- Bugs en la carpeta Forms.
- Error de importación en App.jsx por diferencia entre GlobalStyle y Globalstyles.js.

  Faltantes respecto a Semana 1

- Carpetas /utils, /store, /constants, /endpoints, /router no creadas y sin contenido funcional.
- Instalar e utilizar react-bootstrap.
- Login simulado con localstorage.

  Problemas de estructura, naming, uso de git o dependencias

- Nombres de archivos con mayúsculas inconsistentes (ej. sidebar.jsx vs Sidebar.jsx).
- Faltaba un orden lógico en las importaciones (components, pages, router) ya que la estructura estaba mal organizada.
- Dependecias (opcional) como bootstrap-icons,react-icons, sweetalert2.

> Este apartado debe completarse **ANTES** de modificar el código.

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados

- Resolvimos requisitos faltantes del TP1 semanal.
- Estructura mejor implementada.
- Las importaciones bien implementadas ya que las mayúsculas interfieren bastante en los import.
- instalamos dependencias que necesitaba.
- Correción de errores con GlobalStyles.


### ✅ Nuevos requerimientos de Semana 2 agregados

- Configuramos el router e aplicamos las rutas publicas y privadas en las pages.
- Creación de hook personalizado useService/ useFetch para simular llamadas a API con loading, error y data.
- instalamos json-server. Tambien lo configuramos y lo dejamos funcionando para nuestras distintas pages (Productos,Clientes,Ventas). db.json para almacenar los datos.
- Creamos carpeta services para operaciones HTTP con data fake.


---

## Observaciones finales (opcional)

- El flujo de trabajo en equipo mejoró respecto a Semana 1: cada uno trabajo en su rama y los cambios subido a dev respecto de la semana 1 que fue confuso donde tenia cada uno, asi ahora fue mucho mas simple y facil.
- Dificultades: Poder resolver los bugs que tuvo la carpeta forms.
- Division de requisitos con el equipo para poder organizarse mejor y hacer que el proyecto funcione e quede bien configurado para el proximo grupo.
