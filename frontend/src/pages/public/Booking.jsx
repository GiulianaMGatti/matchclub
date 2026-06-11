import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReservations } from "../../context/ReservationContext";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addReservation } = useReservations();

  const clubName = `Club ${id}`;

  const sports = ["Pádel", "Tenis", "Fútbol", "Vóley"];
  const dates = ["22/06/2026", "23/06/2026", "24/06/2026"];
  const times = ["18:00", "19:00", "20:00", "21:00"];

  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const isFormComplete = selectedSport && selectedDate && selectedTime;

  const handleConfirmReservation = () => {
    if (!isFormComplete) return;

    addReservation({
      club: clubName,
      sport: selectedSport,
      date: selectedDate,
      time: selectedTime,
    });

    navigate("/booking-confirm");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 text-slate-900">
      <h1 className="text-2xl font-bold mb-2">Reservar turno</h1>

      <p className="text-slate-500 mb-6">
        Completá los datos para confirmar tu reserva.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold mb-3">1. Elegí una disciplina</h2>

          <div className="flex flex-wrap gap-3">
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedSport === sport
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
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedDate === date
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
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedTime === time
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
          <p>Club: {clubName}</p>
          <p>Disciplina: {selectedSport || "-"}</p>
          <p>Fecha: {selectedDate || "-"}</p>
          <p>Horario: {selectedTime || "-"}</p>
        </div>

        <button
          onClick={handleConfirmReservation}
          disabled={!isFormComplete}
          className={`w-full py-3 rounded-lg text-white ${
            isFormComplete
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