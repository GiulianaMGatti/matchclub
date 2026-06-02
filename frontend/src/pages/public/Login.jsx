import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(email, password);

    if (result.success) {
      navigate("/admin");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@matchclub.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Contraseña</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="1234"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Ingresar
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-500 bg-slate-100 p-3 rounded-lg">
        <p><strong>Usuario de prueba:</strong></p>
        <p>Email: admin@matchclub.com</p>
        <p>Contraseña: 1234</p>
      </div>
    </div>
  );
}

export default Login;