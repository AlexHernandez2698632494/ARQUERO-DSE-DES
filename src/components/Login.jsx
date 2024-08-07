// src/components/Login.js
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
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const usersRef = collection(db, "users");
    const q = query(
      usersRef,
      where("carnet", "==", carnet),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      navigate("/dashboard"); // Cambia a tu ruta protegida
    } else {
      alert("Carnet o contraseña incorrectos");
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
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Iniciar Sesión</button>
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
