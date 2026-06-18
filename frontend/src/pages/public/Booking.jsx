import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReservations } from "../../context/ReservationContext";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addReservation } = useReservations();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const clubs = [
    {
      id: 1,
      name: "Posta Padel",
      location: "Carlos Tejedor",
      sports: ["Pádel"],
    },
    {
      id: 2,
      name: "Club Argentino",
      location: "Carlos Tejedor",
      sports: ["Fútbol", "Padel"],
    },
    {
      id: 3,
      name: "Club Los Vascos",
      location: "Carlos Tejedor",
      sports: ["Tenis", "Pelota Paleta"],
    },
    {
      id: 4,
      name: "Club Gorra de Cuero",
      location: "Carlos Tejedor",
      sports: ["Fútbol", "Padel"],
    },
    {
      id: 5,
      name: "Club Huracan",
      location: "Carlos Tejedor",
      sports: ["Fútbol", "Padel", "Hockey"],
    },
  ];

  const dates = ["22/06/2026", "23/06/2026", "24/06/2026"];
  const times = ["18:00", "19:00", "20:00", "21:00"];

  const club = clubs.find((club) => club.id === Number(id));

  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  if (!club) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 text-slate-900">
        <h1 className="text-2xl font-bold mb-2">Club no encontrado</h1>
        <p className="text-slate-500">
          No pudimos encontrar la información del club seleccionado.
        </p>
        <button
          onClick={() => navigate("/clubs")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Volver a clubes
        </button>
      </div>
    );
  }

  const clubName = club.name;
  const sports = club.sports;
  const isFormComplete =
    userName &&
    userEmail &&
    selectedSport &&
    selectedDate &&
    selectedTime;

  const handleConfirmReservation = () => {
    if (!isFormComplete) return;

    addReservation({
      club: clubName,
      sport: selectedSport,
      date: selectedDate,
      time: selectedTime,
      user: userName,
      email: userEmail,
    });

    navigate("/booking-confirm");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 text-slate-900">
      <h1 className="text-2xl font-bold mb-2">Reservar turno</h1>

      <p className="text-slate-500 mb-6">
        Completá los datos para confirmar tu reserva en{" "}
        <strong>{clubName}</strong>.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">
              Nombre
            </label>

            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresá tu nombre"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ejemplo@email.com"
            />
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-3">1. Elegí una disciplina</h2>

          <div className="flex flex-wrap gap-3">
            {sports.map((sport) => (
              <button
                key={sport}
                type="button"
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-lg border ${selectedSport === sport
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-700 border-slate-300"
                  }`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-3">2. Elegí una fecha</h2>

          <div className="flex flex-wrap gap-3">
            {dates.map((date) => (
              <button
                key={date}
                type="button"
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-2 rounded-lg border ${selectedDate === date
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-700 border-slate-300"
                  }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-3">3. Elegí un horario</h2>

          <div className="flex flex-wrap gap-3">
            {times.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-lg border ${selectedTime === time
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-700 border-slate-300"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-100 rounded-lg p-4">
          <h2 className="font-semibold mb-2">Resumen</h2>
          <p>Nombre: {userName || "-"}</p>
          <p>Email: {userEmail || "-"}</p>
          <p>Club: {clubName}</p>
          <p>Disciplina: {selectedSport || "-"}</p>
          <p>Fecha: {selectedDate || "-"}</p>
          <p>Horario: {selectedTime || "-"}</p>
        </div>

        <button
          type="button"
          onClick={handleConfirmReservation}
          disabled={!isFormComplete}
          className={`w-full py-3 rounded-lg text-white ${isFormComplete
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-slate-400 cursor-not-allowed"
            }`}
        >
          Confirmar reserva
        </button>
      </div>
    </div>
  );
}

export default Booking;