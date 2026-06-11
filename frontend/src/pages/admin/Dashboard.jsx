import { useReservations } from "../../context/ReservationContext";

function Dashboard() {
  const { reservations } = useReservations();

  const totalReservations = reservations.length;

  const confirmedReservations = reservations.filter(
    (reservation) => reservation.status === "Confirmada"
  ).length;

  const pendingReservations = reservations.filter(
    (reservation) => reservation.status === "Pendiente"
  ).length;

  const paidReservations = reservations.filter(
    (reservation) => reservation.paymentStatus === "Pagada"
  ).length;

  const recentReservations = reservations.slice(-3).reverse();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white text-slate-900 rounded-xl p-4 shadow">
          <p className="text-sm text-slate-500">Reservas Totales</p>
          <p className="text-3xl font-bold">{totalReservations}</p>
        </div>

        <div className="bg-white text-slate-900 rounded-xl p-4 shadow">
          <p className="text-sm text-slate-500">Confirmadas</p>
          <p className="text-3xl font-bold">{confirmedReservations}</p>
        </div>

        <div className="bg-white text-slate-900 rounded-xl p-4 shadow">
          <p className="text-sm text-slate-500">Pendientes</p>
          <p className="text-3xl font-bold">{pendingReservations}</p>
        </div>

        <div className="bg-white text-slate-900 rounded-xl p-4 shadow">
          <p className="text-sm text-slate-500">Pagadas</p>
          <p className="text-3xl font-bold">{paidReservations}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Últimas reservas
        </h3>

        {recentReservations.length === 0 ? (
          <p className="text-slate-600">
            Todavía no hay reservas registradas.
          </p>
        ) : (
          <table className="w-full text-slate-900">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Usuario</th>
                <th className="text-left p-2">Club</th>
                <th className="text-left p-2">Deporte</th>
                <th className="text-left p-2">Fecha</th>
                <th className="text-left p-2">Hora</th>
              </tr>
            </thead>

            <tbody>
              {recentReservations.map((reservation) => (
                <tr key={reservation.id} className="border-b">
                  <td className="p-2">{reservation.user}</td>
                  <td className="p-2">{reservation.club}</td>
                  <td className="p-2">{reservation.sport}</td>
                  <td className="p-2">{reservation.date}</td>
                  <td className="p-2">{reservation.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;