import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { db } from "../database/firebase";
import { collection, addDoc, getDocs } from 'firebase/firestore';

const ModalSubmenu = ({ isOpen, onRequestClose }) => {
    const [pregunta, setPregunta] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState('');

    useEffect(() => {
        const fetchCategorias = async () => {
            const querySnapshot = await getDocs(collection(db, 'menuPrincipal'));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCategorias(data);
        };
        fetchCategorias();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'submenu'), { pregunta, categoria });
            onRequestClose();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Agregar Submenú</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pregunta" value={pregunta} onChange={(e) => setPregunta(e.target.value)} required />
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                    <option value="">Seleccione Categoría</option>
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.pregunta}</option>
                    ))}
                </select>
                <button type="submit">Guardar</button>
            </form>
            <button onClick={onRequestClose}>Cerrar</button>
        </Modal>
    );
};

export default ModalSubmenu;
