import { Link } from "react-router-dom";
import logo from "../../assets/logo-matchclub.jpeg";

function Home() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={logo}
          alt="Logo MatchClub"
          className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg mb-6"
        />

        <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
          Conectá con tu deporte
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Reservá tu cancha en pocos pasos
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          MatchClub te permite encontrar clubes deportivos, consultar
          disponibilidad y gestionar reservas de forma simple, rápida y
          organizada.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/clubs"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition shadow-sm"
          >
            Explorar clubes
          </Link>

          <Link
            to="/login"
            className="bg-white hover:bg-slate-100 text-blue-600 border border-blue-200 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Acceso admin
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;