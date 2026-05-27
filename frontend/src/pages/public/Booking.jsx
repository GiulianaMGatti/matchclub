import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Booking() {
  const { id } = useParams();

  const sports = ["Pádel", "Tenis", "Vóley"];
  const dates = ["2026-04-22", "2026-04-23", "2026-04-24"];
  const timeSlots = ["18:00", "19:00", "20:00", "21:00"];

  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Reserva de turno</h1>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-3">1. Elegí disciplina</h2>
          <div className="flex gap-3 flex-wrap">
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedSport === sport
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">2. Elegí fecha</h2>
          <div className="flex gap-3 flex-wrap">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedDate === date
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">3. Elegí horario</h2>
          <div className="flex gap-3 flex-wrap">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedTime === time
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold mb-3">Resumen</h2>
          <p><strong>Club ID:</strong> {id}</p>
          <p><strong>Disciplina:</strong> {selectedSport || "-"}</p>
          <p><strong>Fecha:</strong> {selectedDate || "-"}</p>
          <p><strong>Horario:</strong> {selectedTime || "-"}</p>
        </div>

        <Link
          to="/booking-confirm"
          className={`inline-block px-6 py-3 rounded-lg text-white ${
            selectedSport && selectedDate && selectedTime
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 pointer-events-none"
          }`}
        >
          Confirmar reserva
        </Link>
      </div>
    </div>
  );
}

export default Booking;