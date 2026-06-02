import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MatchClub
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>

        <Link to="/clubs" className="hover:text-blue-500">
          Clubes
        </Link>

        {isAuthenticated && (
          <Link to="/admin" className="hover:text-blue-500">
            Admin
          </Link>
        )}

        {!isAuthenticated ? (
          <Link to="/login" className="hover:text-blue-500">
            Login
          </Link>
        ) : (
          <>
            <span className="text-sm text-gray-500">
              Hola, {user.name}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;