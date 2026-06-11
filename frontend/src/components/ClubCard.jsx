import { Link } from "react-router-dom";

function ClubCard({ id, name, location }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5 hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{name}</h2>
          <p className="text-slate-500 text-sm">{location}</p>
        </div>

        <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
          Disponible
        </span>
      </div>

      <p className="text-sm text-slate-600 mb-5">
        Consultá disponibilidad y reservá tu turno deportivo.
      </p>

      <Link
        to={`/clubs/${id}`}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition"
      >
        Ver disponibilidad
      </Link>
    </div>
  );
}

export default ClubCard;