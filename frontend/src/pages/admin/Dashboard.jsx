function Dashboard() {
  const stats = {
    totalReservations: 4,
    confirmedReservations: 2,
    pendingReservations: 1,
    paidReservations: 2,
  };

  const recentReservations = [
    {
      id: 1,
      user: "Juan Pérez",
      sport: "Pádel",
      date: "22/06/2026",
    },
    {
      id: 2,
      user: "María López",
      sport: "Tenis",
      date: "23/06/2026",
    },
    {
      id: 3,
      user: "Lucía Fernández",
      sport: "Vóley",
      date: "25/06/2026",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

        <div className="bg-white text-slate-900 rounded-xl p-4 shadow">
          <p className="text-sm text-slate-500">
            Reservas Totales
          </p>
          <p className="text-3xl font-bold">
            {stats.totalReservations}
          </p>
        </div>

        <div className="bg-white text-slate-900 rounded-xl p-4 shadow">
          <p className="text-sm text-slate-500">
            Confirmadas
          </p>
          <p className="text-3xl font-bold">
            {stats.confirmedReservations}
          </p>
        </div>

        <div className="bg-white text-slate-900 rounded-xl p-4 shadow">
          <p className="text-sm text-slate-500">
            Pendientes
          </p>
          <p className="text-3xl font-bold">
            {stats.pendingReservations}
          </p>
        </div>

        <div className="bg-white text-slate-900 rounded-xl p-4 shadow">
          <p className="text-sm text-slate-500">
            Pagadas
          </p>
          <p className="text-3xl font-bold">
            {stats.paidReservations}
          </p>
        </div>

      </div>

      <div className="bg-white rounded-xl p-6 shadow">

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Últimas reservas
        </h3>

        <table className="w-full text-slate-900">

          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Usuario</th>
              <th className="text-left p-2">Deporte</th>
              <th className="text-left p-2">Fecha</th>
            </tr>
          </thead>

          <tbody>
            {recentReservations.map((reservation) => (
              <tr
                key={reservation.id}
                className="border-b"
              >
                <td className="p-2">{reservation.user}</td>
                <td className="p-2">{reservation.sport}</td>
                <td className="p-2">{reservation.date}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default Dashboard;