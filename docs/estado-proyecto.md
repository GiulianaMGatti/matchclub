# MatchClub - Estado Actual del Proyecto

## Información General

**Proyecto:** MatchClub
**Materia:** Programación Web III (TUDAI)
**Frontend:** React + Vite + Tailwind CSS
**Backend:** Node.js + Express
**Control de versiones:** Git + GitHub

---

# Repositorio

**GitHub:**
https://github.com/GiulianaMGatti/matchclub

---

# Estrategia de ramas

## main

Versión estable destinada a la entrega final.

## develop

Rama principal de integración y desarrollo.

## feature/*

Ramas temporales para nuevas funcionalidades.

Ejemplos:

* feature/login-auth
* feature/backend-reservations
* feature/ui-improvements

---

# Estado Actual del Proyecto

## Frontend

### Arquitectura implementada

* React + Vite configurado
* Tailwind CSS configurado
* React Router configurado
* Rutas centralizadas en `routes.jsx`
* Layouts separados:

  * PublicLayout
  * AdminLayout
* Uso de `Outlet`
* Separación de páginas:

  * `pages/public`
  * `pages/admin`
* Navbar dinámica
* Navegación interna funcional

### Páginas públicas implementadas

* Home
* Listado de clubes
* Detalle de club
* Flujo inicial de reserva
* Login

### Autenticación implementada

* Context API
* AuthProvider
* Login mock
* Persistencia de sesión mediante Local Storage
* Protected Routes
* Logout funcional
* Acceso controlado al panel administrativo

### Panel Administrativo

#### Dashboard

Implementado:

* KPIs de reservas
* Indicadores visuales
* Listado de últimas reservas

#### Gestión de Reservas

Implementado:

* Tabla de reservas
* Estados visuales mediante badges de colores
* Estado de pago
* Acciones iniciales (Ver / Cancelar)
* Sidebar administrativa

### Integración Frontend-Backend

Implementado:

* Consumo de API mediante Fetch
* Comunicación con backend Express
* Obtención de listado de clubes

---

## Backend

Implementado:

* Servidor Express configurado
* Endpoint `/clubs`
* Respuesta JSON
* Comunicación Frontend ↔ Backend funcional

---

# Feedback del Profesor

Se realizó una reorganización de la arquitectura siguiendo las recomendaciones recibidas:

* Separación entre páginas públicas y administrativas
* Implementación de layouts independientes
* Uso de Outlet para renderizado de rutas hijas
* Centralización del sistema de rutas
* Mejor organización para futuras validaciones y control de acceso

Estado: **Implementado correctamente**

---

# Trabajo por Integrante

## Giuli

Implementado:

* Arquitectura React
* React Router
* Context API
* Login
* Protected Routes
* Dashboard administrativo
* Gestión de reservas
* Integración Frontend-Backend

## Martín

En desarrollo:

* UX/UI
* Mejoras visuales
* Responsive Design
* Adaptación al diseño de Figma

---

# Próximas Etapas

## Frontend

* Gestión de clubes desde panel administrativo
* Gestión de usuarios
* Formularios administrativos
* Mejoras visuales
* Responsive Design completo

## Backend

* Reservas persistentes
* CRUD de clubes
* CRUD de reservas
* Gestión de usuarios

## Base de Datos

Pendiente de definición:

* MySQL o Supabase

---

# Funcionalidades Futuras

* Autenticación real
* JWT
* Roles y permisos
* Gestión completa de usuarios
* Reservas reales
* Pasarela de pagos
* Notificaciones por correo electrónico
* Recordatorios automáticos por WhatsApp
* Historial de reservas por usuario
* Estadísticas y métricas de uso

---

# Estado General

✅ Proyecto estable y funcional.

Actualmente se encuentra implementada la arquitectura principal del frontend, autenticación simulada, panel administrativo básico y comunicación inicial con backend.

La siguiente etapa consiste en ampliar las funcionalidades administrativas y comenzar la persistencia de datos.

