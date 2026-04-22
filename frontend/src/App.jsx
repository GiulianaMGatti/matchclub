import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ClubDetail from "./pages/ClubDetail";
import Booking from "./pages/Booking";
import BookingConfirm from "./pages/BookingConfirm";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/:id" element={<ClubDetail />} />
        <Route path="/clubs/:id/booking" element={<Booking />} />
        <Route path="/booking-confirm" element={<BookingConfirm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </MainLayout>
  );
}

export default App;