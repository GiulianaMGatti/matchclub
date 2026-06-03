function Reservations() {
  const reservations = [
    {
      id: 1,
      user: "Juan Pérez",
      sport: "Pádel",
      date: "22/06/2026",
      time: "20:00",
      status: "Confirmada",
      paymentStatus: "Pagada",
    },
    {
      id: 2,
      user: "María López",
      sport: "Tenis",
      date: "23/06/2026",
      time: "18:00",
      status: "Pendiente",
      paymentStatus: "Pendiente",
    },
    {
      id: 3,
      user: "Carlos Gómez",
      sport: "Fútbol",
      date: "24/06/2026",
      time: "21:00",
      status: "Cancelada",
      paymentStatus: "No aplica",
    },
    {
      id: 4,
      user: "Lucía Fernández",
      sport: "Vóley",
      date: "25/06/2026",
      time: "19:00",
      status: "Confirmada",
      paymentStatus: "Pagada",
    },
  ];

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

  const getStatusClass = (status) => {
    if (status === "Confirmada") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Pendiente") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "Cancelada") {
      return "bg-red-100 text-red-700";
    }

    return "bg-slate-100 text-slate-700";
  };

  const getPaymentClass = (status) => {
    if (status === "Pagada") {
      return "bg-blue-100 text-blue-700";
    }

    if (status === "Pendiente") {
      return "bg-orange-100 text-orange-700";
    }

    return "bg-slate-100 text-slate-700";
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Gestión de Reservas</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white text-slate-900 rounded-xl p-4 shadow">
          <p className="text-sm text-slate-500">Total de reservas</p>
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

      <div className="overflow-x-auto">
        <table className="w-full bg-white text-black rounded-lg overflow-hidden">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-3 text-left">Usuario</th>
              <th className="p-3 text-left">Deporte</th>
              <th className="p-3 text-left">Fecha</th>
              <th className="p-3 text-left">Hora</th>
              <th className="p-3 text-left">Reserva</th>
              <th className="p-3 text-left">Pago</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="border-b">
                <td className="p-3">{reservation.user}</td>
                <td className="p-3">{reservation.sport}</td>
                <td className="p-3">{reservation.date}</td>
                <td className="p-3">{reservation.time}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(
                      reservation.status
                    )}`}
                  >
                    {reservation.status}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getPaymentClass(
                      reservation.paymentStatus
                    )}`}
                  >
                    {reservation.paymentStatus}
                  </span>
                </td>

                <td className="p-3">
                  <div className="flex gap-2">
                    <button className="bg-slate-700 text-white px-3 py-1 rounded hover:bg-slate-800">
                      Ver
                    </button>

                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Cancelar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reservations;