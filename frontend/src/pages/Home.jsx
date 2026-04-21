import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 mt-20">
      <h1 className="text-4xl font-bold text-blue-600">
        MatchClub
      </h1>

      <p className="text-gray-600 max-w-md">
        Reservá tu cancha en segundos. Encontrá clubes, elegí tu deporte y asegurá tu turno sin vueltas.
      </p>

      <a
        href="/clubs"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Ver clubes
      </a>
    </div>
  );
}

export default Home;