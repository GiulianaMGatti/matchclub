import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="p-4 bg-slate-950 border-b border-slate-700">
        <h1 className="text-xl font-bold">Panel de Administración - MatchClub</h1>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;