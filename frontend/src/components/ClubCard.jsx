import { Link } from "react-router-dom";

function ClubCard({ id, name, location }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-64 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500 text-sm">{location}</p>

      <Link
        to={`/clubs/${id}`}
        className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ver disponibilidad
      </Link>
    </div>
  );
}

export default ClubCard;