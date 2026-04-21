import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MatchClub</h1>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/clubs" className="hover:text-blue-500">Clubes</Link>
        <Link to="/login" className="hover:text-blue-500">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;