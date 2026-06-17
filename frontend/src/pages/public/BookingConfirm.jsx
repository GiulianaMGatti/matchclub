import { Link } from "react-router-dom";
import logo from "../../assets/logo-matchclub.jpeg";

function BookingConfirm() {
  const storedReservation = localStorage.getItem("matchclub_last_reservation");
  const reservation = storedReservation ? JSON.parse(storedReservation) : null;

  if (!reservation) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          No hay una reserva reciente
        </h1>

        <p className="text-slate-600 mb-6">
          Todavía no se generó ningún comprobante de reserva.
        </p>

        <Link
          to="/clubs"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Explorar clubes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg border overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-6 text-white text-center">
          <img
            src={logo}
            alt="Logo MatchClub"
            className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-white"
          />

          <h1 className="text-3xl font-bold">Reserva confirmada</h1>

          <p className="text-blue-50 mt-2">
            Tu comprobante fue generado correctamente.
          </p>
        </div>

        <div className="p-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
            <p className="text-sm text-yellow-700 font-semibold">
              Código de reserva
            </p>
            <p className="text-2xl font-bold text-slate-900">
              {reservation.code}
            </p>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Detalle del turno
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">Club</p>
              <p className="font-semibold text-slate-900">
                {reservation.club}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">Disciplina</p>
              <p className="font-semibold text-slate-900">
                {reservation.sport}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">Fecha</p>
              <p className="font-semibold text-slate-900">
                {reservation.date}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">Horario</p>
              <p className="font-semibold text-slate-900">
                {reservation.time}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">Estado de reserva</p>
              <p className="font-semibold text-yellow-600">
                {reservation.status}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">Estado de pago</p>
              <p className="font-semibold text-orange-600">
                {reservation.paymentStatus}
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6">
            <p className="text-sm text-blue-700">
              Tu reserva fue registrada correctamente.
              Presentá este comprobante al momento de utilizar la instalación deportiva.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/clubs"
              className="bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition"
            >
              Hacer otra reserva
            </Link>

            <Link
              to="/admin/reservas"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Ver en panel admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirm;