import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';

const Navbar = () => {
  return (
    <div className="navbar-container2">
      <nav className="navbar2">
        <div className="navbar-buttons2">
          <Link to="/"><button>Cerrar Sesión</button></Link>
          <Link to="/chatbot"><button>Chatbot</button></Link>
        </div>
      </nav>
    </div> 
  );
};

export default Navbar;
