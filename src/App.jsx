import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contenet from "./components/Home";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot"; // Asegúrate de crear este componente
import Login from "./components/Login"; // Importa el componente de inicio de sesión
import Register from "./components/Register"; // Importa el componente de registro
import "./App.css";

const Home = () => (
  <div className="home-container" id="home">
    <Navbar />
    <Contenet />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatbot" element={<Chatbot />} />
        {/* Agrega otras rutas aquí si es necesario */}
      </Routes>
    </Router>
  );
};

export default App;
