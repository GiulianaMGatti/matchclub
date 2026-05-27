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
      <h1 className="text-2xl font-bold mb-6">Clubes disponibles</h1>

      <div className="flex gap-4 flex-wrap">
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