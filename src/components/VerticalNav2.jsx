// src/components/VerticalNav.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './VerticalNav.css';

const VerticalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="vertical-nav">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <div className="full-screen-menu">
          <button className="close-button" onClick={toggleMenu}>
            ✖
          </button>
          <div className="menu-items">
            <Link to="/"><button>INICIO</button></Link>
            <Link to="/chatbot"><button>Chatbot</button></Link>
            <button>Inventario</button>
          </div>
        </div>
      )}
      <button className="close-nav" onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default VerticalNav;
