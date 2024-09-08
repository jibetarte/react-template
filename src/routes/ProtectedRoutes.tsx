import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import PaginaEjemplo from "../pages/PaginaEjemplo/PaginaEjemplo";
import { useEffect } from "react";

const estaLogueado = true;

export default function ProtectedRoutes() {
  const navigate = useNavigate();
  // Aca se puede chequear si el usuario esta logueado, si no lo está se puede redirigir a la página de login, y no se le deja acceder a las rutas protegidas.
  useEffect(() => {
    // Si el no usuario esta logueado
    if (!estaLogueado) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div id="detail" className="p-10 h-screen w-full">
      {estaLogueado && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagina-ejemplo" element={<PaginaEjemplo />} />
        </Routes>
      )}
    </div>
  );
}
