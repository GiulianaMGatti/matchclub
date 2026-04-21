import ClubCard from "../components/ClubCard";

function Clubs() {
  const clubs = [
    { id: 1, name: "Posta Padel", location: "Carlos Tejedor" },
    { id: 2, name: "Club Argentino", location: "Carlos Tejedor" },
    { id: 3, name: "Club Los Vazcos", location: "Carlos Tejedor" },
    { id: 4, name: "Club Gorra de Cuero", location: "Carlos Tejedor" },
    { id: 5, name: "Club Huracan", location: "Carlos Tejedor" },


  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Clubes disponibles</h1>

      <div className="flex gap-4 flex-wrap">
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            name={club.name}
            location={club.location}
          />
        ))}
      </div>
    </div>
  );
}

export default Clubs;