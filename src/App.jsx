import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot"; // Asegúrate de crear este componente
import "./App.css";

const Home = () => (
  <div className="home-container" id="home">
    <Navbar />
    <div className="hero-image">
      <img src="/arquero.jpg" alt="Investigacion Aplicada" />
    </div>
    <div className="info-container">
      <div className="column first-column"></div>
      <div className="column image-column">
        <img src="/investigacion_aplicada.jpg" alt="Arquero" />
      </div>
      <div className="column description-column" id="sinopsis">
        <p>
          Una institución de educación superior busca optimizar el servicio al
          estudiante implementando un chatbot capaz de manejar preguntas
          frecuentes y ofrecer asistencia básica de manera eficiente.
        </p>
      </div>
      <div className="column details-column">
        <p>Dirección</p>
        <p></p>
        <p>Escrita por</p>
        <p>Alex Romero</p>
        <p>Reparto</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className="column fifth-column"></div>
    </div>
    <div className="separator-line"></div>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        {/* Agrega otras rutas aquí si es necesario */}
      </Routes>
    </Router>
  );
};

export default App;
