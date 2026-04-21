import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;