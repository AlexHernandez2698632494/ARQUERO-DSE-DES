import React, { useState } from 'react';
import Modal from 'react-modal';
import { db } from "../database/firebase";
import { collection, addDoc } from 'firebase/firestore';

const ModalChatbotPregunta = ({ isOpen, onRequestClose }) => {
    const [pregunta, setPregunta] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'menuPrincipal'), { pregunta });
            onRequestClose();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Agregar Pregunta al Chatbot</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pregunta" value={pregunta} onChange={(e) => setPregunta(e.target.value)} required />
                <button type="submit">Guardar</button>
            </form>
            <button onClick={onRequestClose}>Cerrar</button>
        </Modal>
    );
};

export default ModalChatbotPregunta;
