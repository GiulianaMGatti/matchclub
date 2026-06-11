import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo-matchclub.jpeg";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo MatchClub"
            className="w-10 h-10 rounded-full object-cover"
          />

          <span className="text-2xl font-bold text-blue-600">
            MatchClub
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-slate-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/clubs"
            className="text-slate-700 hover:text-blue-600 transition"
          >
            Clubes
          </Link>

          {isAuthenticated && (
            <Link
              to="/admin"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              Admin
            </Link>
          )}

          {isAuthenticated && (
            <>
              <span className="text-sm text-slate-500">
                Hola, Administrador MatchClub
              </span>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Cerrar sesión
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;