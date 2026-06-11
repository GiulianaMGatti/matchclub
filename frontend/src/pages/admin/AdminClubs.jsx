function AdminClubs() {
  const clubs = [
    {
      id: 1,
      name: "Posta Padel",
      location: "Carlos Tejedor",
      sports: ["Pádel"],
      status: "Activo",
    },
    {
      id: 2,
      name: "Club Argentino",
      location: "Carlos Tejedor",
      sports: ["Fútbol", "Padel"],
      status: "Activo",
    },
    {
      id: 3,
      name: "Club Los Vascos",
      location: "Carlos Tejedor",
      sports: ["Tenis", "Pelota Paleta"],
      status: "Activo",
    },
    {
      id: 4,
      name: "Club Gorra de Cuero",
      location: "Carlos Tejedor",
      sports: ["Fútbol", "Padel"],
      status: "Activo",
    },
    {
      id: 5,
      name: "Club Huracan",
      location: "Carlos Tejedor",
      sports: ["Fútbol", "Padel", "Hockey"],
      status: "Activo",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Gestión de Clubes</h2>

      <div className="bg-white rounded-xl shadow overflow-hidden text-slate-900">
        <table className="w-full">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-3 text-left">Club</th>
              <th className="p-3 text-left">Localidad</th>
              <th className="p-3 text-left">Disciplinas</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clubs.map((club) => (
              <tr key={club.id} className="border-b">
                <td className="p-3 font-medium">{club.name}</td>
                <td className="p-3">{club.location}</td>
                <td className="p-3">{club.sports.join(", ")}</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {club.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="bg-slate-700 text-white px-3 py-1 rounded hover:bg-slate-800">
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminClubs;