import React, { useState } from 'react';
import Modal from 'react-modal';
import { db } from "../database/firebase";
import { collection, addDoc } from 'firebase/firestore';
import './MainView.css';

const ModalAgenda = ({ isOpen, onRequestClose }) => {
    const [nombre, setNombre] = useState('');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFin, setHoraFin] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'agenda'), { nombre, dia, mes, horaInicio, horaFin });
            onRequestClose();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Agregar Agenda</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                <input type="text" placeholder="Día" value={dia} onChange={(e) => setDia(e.target.value)} required />
                <input type="text" placeholder="Mes" value={mes} onChange={(e) => setMes(e.target.value)} required />
                <input type="text" placeholder="Hora Inicio" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} required />
                <input type="text" placeholder="Hora Fin" value={horaFin} onChange={(e) => setHoraFin(e.target.value)} required />
                <button type="submit">Guardar</button>
            </form>
            <button onClick={onRequestClose}>Cerrar</button>
        </Modal>
    );
};

export default ModalAgenda;
