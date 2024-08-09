import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { db } from "../database/firebase";
import { collection, addDoc, getDocs } from 'firebase/firestore';

const ModalRespuesta = ({ isOpen, onRequestClose }) => {
    const [respuesta, setRespuesta] = useState('');
    const [subcategorias, setSubcategorias] = useState([]);
    const [categoriaSubmen, setCategoriaSubmen] = useState('');

    useEffect(() => {
        const fetchSubcategorias = async () => {
            const querySnapshot = await getDocs(collection(db, 'submenu'));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setSubcategorias(data);
        };
        fetchSubcategorias();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'respuestas'), { respuesta, categoriaSubmen });
            onRequestClose();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Agregar Respuesta</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Respuesta" value={respuesta} onChange={(e) => setRespuesta(e.target.value)} required />
                <select value={categoriaSubmen} onChange={(e) => setCategoriaSubmen(e.target.value)} required>
                    <option value="">Seleccione Categoría</option>
                    {subcategorias.map(subcat => (
                        <option key={subcat.id} value={subcat.id}>{subcat.pregunta}</option>
                    ))}
                </select>
                <button type="submit">Guardar</button>
            </form>
            <button onClick={onRequestClose}>Cerrar</button>
        </Modal>
    );
};

export default ModalRespuesta;
