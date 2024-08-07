import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../database/firebase';
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar2';
import VerticalNav from './VerticalNav';
import Footer from './Footer2';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [carnet, setCarnet] = useState('');
  const [password, setPassword] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingRegistration, setPendingRegistration] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!name || !surname || !carnet || !password) {
      setModalMessage('Por favor, complete todos los campos.');
      setIsModalOpen(true);
      return;
    }

    // Preparar para el registro pendiente
    setPendingRegistration(true);
    setModalMessage('Registro exitoso!');
    setIsModalOpen(true);
  };

  const closeModal = async () => {
    setIsModalOpen(false);

    // Guardar datos y redirigir solo si el registro está pendiente
    if (pendingRegistration) {
      try {
        await addDoc(collection(db, "register"), {
          name,
          surname,
          carnet,
          password,
        });
        await addDoc(collection(db, "users"), {
          carnet,
          password,
        });
        setPendingRegistration(false); // Resetear el estado
        navigate('/login');
      } catch (error) {
        setModalMessage('Ha ocurrido un error: ' + error.message);
        setIsModalOpen(true);
      }
    }
  };

  return (
    <div className='register'>
      <Navbar />
      <div className="register-container">
        <VerticalNav /> 
        <div className="register-form-container">
          <div className="register-form">
            <h2>Registrarse</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Apellido"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Carnet"
                value={carnet}
                onChange={(e) => setCarnet(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Registrarse</button>
            </form>
            <p className="login-link">
              ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
            </p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Register;
