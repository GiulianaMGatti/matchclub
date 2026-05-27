import { Link, useParams } from "react-router-dom";

function ClubDetail() {
  const { id } = useParams();

  const club = {
    id,
    name: "Club Deportivo Norte",
    location: "Buenos Aires",
    sports: ["Pádel", "Tenis", "Vóley"],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
      <p className="text-gray-600 mb-6">{club.location}</p>

      <h2 className="text-xl font-semibold mb-3">Disciplinas disponibles</h2>

      <div className="flex gap-3 flex-wrap mb-8">
        {club.sports.map((sport) => (
          <span
            key={sport}
            className="bg-white border px-4 py-2 rounded-lg shadow-sm"
          >
            {sport}
          </span>
        ))}
      </div>

      <Link
        to={`/clubs/${club.id}/booking`}
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Reservar en este club
      </Link>
    </div>
  );
}

export default ClubDetail;