# MatchClub - Estado Actual del Proyecto

## Información General

**Proyecto:** MatchClub
**Materia:** Programación Web III (TUDAI)
**Frontend:** React + Vite + Tailwind CSS
**Backend:** Node.js + Express
**Control de versiones:** Git + GitHub

---

# Repositorio

GitHub:
https://github.com/GiulianaMGatti/matchclub

---

# Estrategia de ramas

## main

Versión estable para entrega final.

## develop

Rama principal de desarrollo e integración.

## feature/*

Ramas temporales para nuevas funcionalidades.

Ejemplos:

* feature/login-auth
* feature/backend-reservations
* feature/ui-improvements

---

# Estado Actual

## Frontend

Implementado:

* React + Vite configurado
* Tailwind CSS configurado
* React Router configurado
* Rutas centralizadas en `routes.jsx`
* Layouts separados:

  * PublicLayout
  * AdminLayout
* Uso de `Outlet`
* Separación de páginas:

  * pages/public
  * pages/admin
* Navbar funcional
* Home funcional
* Listado de clubes
* Detalle de club
* Flujo inicial de reserva
* Integración frontend-backend mediante fetch

---

## Backend

Implementado:

* Express configurado
* Endpoint `/clubs`
* Comunicación frontend-backend funcionando
* Respuesta JSON para listado de clubes

---

# Feedback del Profesor

Se reorganizó la arquitectura para:

* separar páginas públicas y administrativas
* utilizar layouts independientes
* utilizar `Outlet`
* centralizar el enrutamiento

Implementado correctamente.

---

# Próximas tareas

## Giuli

* Login
* Context API
* Protected Routes
* Acceso controlado al panel admin

## Martín

* UX/UI
* Mejoras visuales
* Responsive
* Adaptación al diseño de Figma

---

# Pendientes futuros

* Autenticación real
* JWT
* Base de datos
* Reservas reales
* Gestión de usuarios
* Panel administrativo completo
* Pasarela de pagos
* Notificaciones

---

# Última actualización

- Implementación de Context API para autenticación.
- Login mock funcional.
- Protected Routes.
- Navbar dinámica.
- Dashboard administrativo.
- Módulo de reservas con indicadores KPI.

Proyecto estable y funcionando.
