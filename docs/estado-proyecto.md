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
* Rutas centralizadas en routes.jsx
* Layouts separados (PublicLayout y AdminLayout)
* Uso de Outlet
* Separación de páginas públicas y administrativas
* Componentización de la interfaz
* Navbar dinámica

### Páginas públicas implementadas

* Home
* Listado de clubes
* Detalle de club
* Reserva de turnos
* Confirmación de reserva
* Login

### Gestión de reservas

Implementado mediante Context API y Local Storage:

* ReservationContext
* Persistencia local
* Creación de reservas
* Cancelación de reservas
* Actualización automática de dashboard
* Actualización automática de panel administrativo

### Autenticación

Implementada mediante Context API:

* AuthContext
* Login mock
* Persistencia de sesión
* Protected Routes
* Logout

### Panel Administrativo

#### Dashboard

* Indicadores KPI
* Reservas totales
* Reservas pendientes
* Reservas confirmadas
* Reservas pagadas
* Últimas reservas registradas

#### Gestión de Reservas

* Tabla de reservas
* Estados visuales
* Estado de pago
* Cancelación de reservas

#### Gestión de Clubes

* Tabla de clubes
* Estado de disponibilidad
* Información general de cada club

### UX/UI

* Logo institucional incorporado
* Favicon personalizado
* Landing principal rediseñada
* Tarjetas de clubes mejoradas
* Sidebar administrativa mejorada
* Dashboard optimizado visualmente

---

## Backend

Implementado:

* Express configurado
* Endpoint /clubs
* Comunicación Frontend ↔ Backend
* Respuesta JSON para listado de clubes

---

# Feedback del Profesor

Se realizaron las siguientes mejoras a partir del feedback recibido:

* Separación de páginas públicas y administrativas
* Uso de Layouts independientes
* Uso de Outlet
* Centralización de rutas
* Organización escalable del proyecto
* Uso de Context API para gestión global de estado

Estado: Implementado correctamente.

---

# Trabajo por Integrante

## Giuliana Gatti

* Arquitectura React
* React Router
* Context API
* Login
* Dashboard
* Gestión de reservas
* Gestión de clubes
* Integración Frontend-Backend
* Documentación

## Martín Romero

* UX/UI
* Diseño visual
* Adaptación al prototipo Figma
* Mejoras responsive

---

# Funcionalidades Futuras

* Base de datos persistente
* Supabase o MySQL
* Autenticación real
* JWT
* Gestión avanzada de usuarios
* Pasarela de pagos
* Notificaciones por correo
* Recordatorios automáticos por WhatsApp

---

# Estado General

Proyecto estable y funcional.

Actualmente permite gestionar reservas deportivas mediante una interfaz web desarrollada con React, utilizando Context API y Local Storage para el manejo de estado y persistencia local.

La arquitectura se encuentra preparada para incorporar una base de datos y autenticación real en futuras versiones.


