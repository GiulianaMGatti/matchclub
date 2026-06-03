import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <header className="p-4 bg-slate-950 border-b border-slate-700">
        <h1 className="text-xl font-bold">
          Panel de Administración - MatchClub
        </h1>
      </header>

      <div className="flex">

        <aside className="w-64 min-h-screen bg-slate-800 p-4">
          <nav className="flex flex-col gap-3">

            <Link
              to="/admin"
              className="hover:text-blue-400"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/reservas"
              className="hover:text-blue-400"
            >
              Reservas
            </Link>

          </nav>
        </aside>

        <main className="flex-1 p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default AdminLayout;