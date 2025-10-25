# 🏆 Sistema de Gestión - Club Social-Deportivo

## 📋 Trabajo Práctico - Semana 1
**Tecnicatura Universitaria en Programación - Comisión 7**  
**Profesor:** Chocobar Matías  
**Grupo N° 4**

---

## 👥 Integrantes y Roles

| Nombre | Legajo | Rol | Responsabilidad Principal |
|--------|--------|-----|---------------------------|
| **German Kreibohm Acotto** | 61130 | **Líder del Proyecto**
| **Maximo Majorel** | 61316 |
| **Agustin Ruben Baza** | 61043 |
| **Joaquin Mansilla** | 61655 |
| **Nicolas Moya** | 61536 |

---

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── common/          # Componentes reutilizables (Button, Input, Modal, Card)
│   ├── forms/           # Formularios específicos
│   └── ui/              # Componentes de interfaz (Sidebar, Navbar, Footer, DataTable)
├── pages/
│   ├── auth/            # Login, Register
│   ├── Home.jsx         # Página principal con info del club
│   └── NotFound.jsx     # Página 404
├── dashboard/
│   ├── Dashboard.jsx    # Panel principal con estadísticas
│   ├── socios/          # Gestión de socios
│   ├── deportes/        # Gestión de deportes
│   └── pagos/           # Gestión de pagos y estado de cuenta
├── layout/
│   ├── MainLayout.jsx   # Layout para páginas públicas
│   ├── AuthLayout.jsx   # Layout para login/registro
│   └── DashboardLayout.jsx  # Layout del panel con Sidebar
├── router/
│   ├── AppRouter.jsx    # Configuración de rutas
│   └── RouterProtect.jsx  # Protección de rutas (sin lógica aún)
├── store/               # Estado global (Redux/Context - futuro)
├── utils/               # Funciones auxiliares (auth, validators, formatters)
├── constants/           # Constantes (routes, roles, messages)
└── endpoints/           # Configuración de APIs (datos simulados)
```

---

## 📄 Justificación de Páginas Planificadas

### **Páginas Públicas (3)**
1. **Home** (`/`) - Presentación del club y acceso al sistema
2. **Login** (`/login`) - Autenticación de usuarios
3. **Not Found** (`/*`) - Manejo de rutas inexistentes

### **Páginas del Dashboard (5)**
4. **Dashboard Principal** (`/dashboard`) - Resumen con estadísticas y accesos rápidos
5. **Gestión de Socios** (`/dashboard/socios`) - CRUD de socios y asociación a deportes
6. **Gestión de Deportes** (`/dashboard/deportes`) - CRUD de deportes disponibles
7. **Gestión de Pagos** (`/dashboard/pagos`) - Registro de cuotas mensuales
8. **Estado de Cuenta** (`/dashboard/estado-cuenta`) - Consulta de deudas por socio

**Total: 8 páginas** - Cantidad justificada por los requerimientos del sistema (administrar socios, deportes, pagos y consultar estado de cuenta).

---

## 🧩 Componentes Reutilizables Previstos

### **Componentes Comunes**
- `Button.jsx` - Botón personalizado con variantes de Bootstrap
- `Input.jsx` - Input con validación y mensajes de error
- `Modal.jsx` - Modal reutilizable para confirmaciones y formularios
- `Card.jsx` - Tarjeta con título y contenido

### **Componentes de UI**
- `Sidebar.jsx` - Menú lateral del dashboard
- `Navbar.jsx` - Barra de navegación superior
- `Footer.jsx` - Pie de página
- `DataTable.jsx` - Tabla genérica con búsqueda, filtros y acciones masivas

### **Componentes de Formularios**
- `SocioForm.jsx` - Formulario para crear/editar socios
- `DeporteForm.jsx` - Formulario para crear/editar deportes
- `PagoForm.jsx` - Formulario para registrar pagos

---

## 🗓️ Roadmap de Desarrollo
- [x] Estructura de carpetas completa
- [x] Componentes base creados
- [x] Login simulado con localStorage
- [x] Dashboard con datos fake (useState + useEffect)
- [x] Seccion usuarios, deportes y pagos
---

## 🔄 Flujo GIT Aplicado

#### **1. Líder crea el Fork y estructura base**
```bash
# El líder hace fork del repo del profesor
# Crea rama dev desde main
git checkout -b dev
git push origin dev
```

#### **2. Integrantes clonan el FORK del líder**
```bash
# Clonar el fork del líder (NO el repo del profesor)
git clone [URL_DEL_FORK_DEL_LIDER]
cd TP_Comison_7_TUP-1

# Crear rama personal
git checkout -b Nombre_Legajo
```

#### **3. Desarrollo en ramas individuales**
```bash
# Trabajar en su rama
git add .
git commit -m "feat: descripción del cambio"
git push origin Nombre_Legajo

# Avisar al líder cuando esté listo
```

#### **4. Líder integra en dev**
```bash
# El líder revisa y hace merge
git checkout dev
git pull origin Nombre_Legajo_Integrante
git merge Nombre_Legajo_Integrante
git push origin dev
```

#### **5. Merge final a main**
```bash
# Cuando dev esté completo y probado
git checkout main
git merge dev
git push origin main
```

#### **6. Pull Request al profesor**
- **Solo el líder** hace PR desde `main` al repo del profesor
- Título: `TP Semana 1 — Grupo 4 — Comisión 7`

---

## 🔄 Guía para Actualizar el Fork del Líder

Si ya existía un fork previo y necesitas actualizarlo con los cambios del profesor:

### **Método 1: Desde GitHub (Web)**
1. Ir al fork del líder en GitHub
2. Click en "Sync fork"
3. Click en "Update branch"

### **Método 2: Desde la Terminal**
```bash
# Agregar el repo del profesor como remoto (solo la primera vez)
git remote add upstream [URL_REPO_PROFESOR]

# Actualizar desde el repo del profesor
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

# Actualizar dev también
git checkout dev
git merge main
git push origin dev
```

## Tabla de Pagos (componente específico)

- `src/components/PaymentTable.jsx`

  - Pre-carga datos en `localStorage` la primera vez que se entra (si no existe la clave `payments`, los setea). Si ya existen, usa los que están (tal cual).

  - Funciones principales:
    - `updatePayments(updated)`: actualiza estado y sincroniza `localStorage` (así la tabla refleja todo al toque).
    - `handleRegisterPayment(id)`: marca un pago individual como "Pagado" (usa `map` y spread para mantener inmutabilidad).
    - `handleRegisterSelected(selectedData)`: mismo concepto pero en lote (viene desde la barra de acciones del DataTable).
    - `handleSendReminder(selectedData)`: por ahora muestra un `alert` (queda listo para enchufar un envío real si hace falta).
  - Columnas (acá se ve cuándo uso `render` y cuándo no):
    - `miembro` → con `render` para darle un estilo al nombre.
    - `membresia` → sin `render` (se muestra tal cual viene, no hace falta decorarlo).
    - `cuota` → con `render` para formatear a `$xx.xx` (si en algún momento queremos, podemos mostrar "Error" en vez de `0` cuando falte el dato, lo dejé comentado).
    - `estado` → con `render` porque muestro un `Badge` verde/rojo/amarillo.
    - `fechaVencimiento` → sin `render` (texto plano).
    - `accion` → con `render` para pintar el botón "Registrar Pago" cuando corresponde.
  - Filtros y acciones:
    - `filters`: por ahora sólo por `estado` (Pagado / Vencido / Pendiente).
    - `actions`: dos botones en la barra flotante cuando hay seleccionados: "Registrar Pago" y "Enviar Recordatorio" (acá uso `variant` de React-Bootstrap para el estilo del botón y una clase extra para terminar de dejarlo como queremos).

- `src/components/PaymentTable.css`
  - Estilos específicos de la tabla de pagos: clases para el nombre, el link de "Registrar Pago", los `Badge` de estado y algunos ajustes de botones.
  - Importante: los estilos "genéricos" de tablas están en el CSS del DataTable (ver más abajo); acá dejamos sólo lo propio de Pagos para no mezclar.

---

## Tabla genérica reutilizable (para todo el sistema)

- `src/components/ui/DataTable.jsx`

  - Este es el componente genérico para que todas las tablas del sistema se vean/funcionen igual (búsqueda, filtros, selección múltiple, acciones masivas, etc.).
  - Props principales (las que más vas a tocar):
    - `data`: array de registros (cada uno con `id`).
    - `columns`: definición de columnas `[ { key, label, render? } ]`.
    - `selectable`: si permite seleccionar filas.
    - `actions`: array de acciones para los seleccionados `[ { label, variant, icon, className, onClick } ]`.
    - `searchable` + `searchPlaceholder`: para mostrar el input de búsqueda.
    - `filters`: dropdowns de filtros (por ejemplo estado, rol, etc.).
  - Cómo funciona la búsqueda:
    - Si NO pasás `onSearch`, hace una búsqueda simple por defecto: arma un string con `Object.values(item).join(' ')` y hace `includes` en minúsculas (sirve para búsquedas generales para todos los campos).
    - Si SÍ pasás `onSearch`, te delega la lógica (o sea, el DataTable no filtra internamente y vos podés filtrar `data` a tu gusto antes de pasársela).
  - Selección de filas:
    - Checkbox por fila: hace toggle con `handleSelectItem(id)` (si estaba, lo saca; si no, lo agrega). Mantiene inmutabilidad.
    - Checkbox del header: `handleSelectAll` toma sólo lo visible (`filteredData`) para seleccionar/deseleccionar en bloque.
    - Cuando hay seleccionados, aparece la barra de acciones de abajo con los botones definidos en `actions`.
  - Acciones masivas:
    - Al apretar un botón, `handleAction` te arma `selectedData` (filtrando `data` por los `selectedItems`) y llama al `onClick` que definiste en `actions`.
