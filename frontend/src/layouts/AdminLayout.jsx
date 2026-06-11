import { Link, Outlet, useLocation } from "react-router-dom";

function AdminLayout() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-white border-b shadow-sm px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">
          MatchClub | Panel de Administración
        </h1>
      </header>

      <div className="flex min-h-[calc(100vh-65px)]">
        <aside className="w-64 bg-blue-700 text-white p-5">
          <nav className="flex flex-col gap-3">
            <Link
              to="/admin"
              className={`px-4 py-3 rounded-lg transition ${
                isActive("/admin")
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-600"
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/admin/reservas"
              className={`px-4 py-3 rounded-lg transition ${
                isActive("/admin/reservas")
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-600"
              }`}
            >
              Reservas
            </Link>

            <Link
              to="/admin/clubes"
              className={`px-4 py-3 rounded-lg transition ${
                isActive("/admin/clubes")
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-600"
              }`}
            >
              Clubes
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;