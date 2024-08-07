import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../database/firebase";
import Navbar from "./Navbar2";
import VerticalNav from "./VerticalNav";
import Footer from "./Footer2";
import "./Login.css";

const Login = () => {
  const [carnet, setCarnet] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!carnet) newErrors.carnet = "El carnet es requerido";
    if (!password) newErrors.password = "La contraseña es requerida";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const usersRef = collection(db, "users");
    const q = query(
      usersRef,
      where("carnet", "==", carnet),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      navigate("/dashboard");
    } else {
      setErrors({ general: "Carnet o contraseña incorrectos" });
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="main-content">
        <VerticalNav />
        <div className="content">
          <div className="login-box">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Ingrese su usuario"
                value={carnet}
                onChange={(e) => setCarnet(e.target.value)}
              />
              {errors.carnet && <p className="error">{errors.carnet}</p>}
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
              <button type="submit">Iniciar Sesión</button>
              {errors.general && <p className="error">{errors.general}</p>}
            </form>
            <p onClick={() => navigate("/register")}>
              No tienes cuenta Registrarse
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
