import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">MatchClub</h1>

      <Link to="/clubs" className="text-blue-500 underline">
        Ver clubes
      </Link>

      <Link to="/login" className="text-blue-500 underline">
        Login
      </Link>
    </div>
  );
}

export default Home;