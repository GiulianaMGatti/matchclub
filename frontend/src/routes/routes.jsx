import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/public/Home";
import Clubs from "../pages/public/Clubs";
import ClubDetail from "../pages/public/ClubDetail";
import Booking from "../pages/public/Booking";
import BookingConfirm from "../pages/public/BookingConfirm";
import Login from "../pages/public/Login";

import Dashboard from "../pages/admin/Dashboard";

import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "clubs",
        element: <Clubs />,
      },
      {
        path: "clubs/:id",
        element: <ClubDetail />,
      },
      {
        path: "clubs/:id/booking",
        element: <Booking />,
      },
      {
        path: "booking-confirm",
        element: <BookingConfirm />,
      },
      {
        path: "Login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;