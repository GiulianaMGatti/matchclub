import { useEffect, useState } from "react";
import ClubCard from "../../components/ClubCard";

function Clubs() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/clubs")
      .then((res) => res.json())
      .then((data) => setClubs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Clubes disponibles
      </h1>

      <p className="text-slate-600 mb-8">
        Elegí un club para consultar disciplinas y horarios disponibles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            id={club.id}
            name={club.name}
            location={club.location}
          />
        ))}
      </div>
    </div>
  );
}

export default Clubs;