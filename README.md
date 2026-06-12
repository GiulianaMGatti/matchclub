# MatchClub

**MatchClub** es una aplicación web desarrollada como trabajo final para la materia **Programación Web III** de la carrera **TUDAI**.

El objetivo del proyecto es simular una plataforma para la gestión y reserva de espacios deportivos en clubes, permitiendo a los usuarios consultar clubes disponibles, seleccionar disciplinas, reservar turnos y acceder a un panel administrativo.

---

## Tecnologías utilizadas

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Context API
- LocalStorage

### Backend
- Node.js
- Express

### Control de versiones
- Git
- GitHub

---

## Funcionalidades principales

### Sitio público

- Landing principal con identidad visual de MatchClub.
- Listado de clubes disponibles.
- Detalle de cada club.
- Disciplinas disponibles por club.
- Flujo de reserva de turno.
- Confirmación de reserva.

### Autenticación

- Login mock.
- Persistencia de sesión mediante LocalStorage.
- Logout.
- Protección de rutas administrativas.

### Panel administrativo

- Dashboard con indicadores principales.
- Gestión de reservas.
- Cancelación de reservas.
- Gestión visual de clubes.
- Sidebar administrativa.
- Actualización dinámica de indicadores.

---

## Usuario de prueba

Para ingresar al panel administrativo:

```text
Email: admin@matchclub.com
Contraseña: 1234
```

---

## Cómo ejecutar el proyecto

### Backend

```bash
cd backend
npm install
npm run dev
```

Servidor:

```text
http://localhost:3000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Servidor:

```text
http://localhost:5173
```

---

## Estructura del proyecto

```text
matchclub/
├── backend/
├── frontend/
├── docs/
├── README.md
└── .gitignore
```

---

## Integrantes

- Giuliana Mandrini Gatti
- Martín Alejandro Romero

---

## Estado del proyecto

Versión funcional orientada a frontend.

Incluye:

- React Router
- Context API
- Login mock
- Rutas protegidas
- Gestión de reservas
- Persistencia mediante LocalStorage
- Dashboard administrativo
- Gestión de clubes
- Identidad visual propia

Proyecto desarrollado para Programación Web III (TUDAI).