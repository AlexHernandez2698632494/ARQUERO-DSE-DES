import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className="navbar-buttons">
        <button>Iniciar sesión</button>
        <Link to="/chatbot"><button>Chatbot</button></Link>
      </div>
      {isMenuOpen && (
        <div className="full-screen-menu">
          <button className="close-button" onClick={toggleMenu}>✖</button>
          <div className="menu-items">
          <Link to="/"><button>INICIO</button></Link>
          <Link to="/chatbot"><button>Chatbot</button></Link>
            <button>Inventario</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
