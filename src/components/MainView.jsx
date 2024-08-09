import React, { useState } from 'react';
import ModalAgenda from './ModalAgenda';
import ModalChatbotPregunta from './ModalChatbotPregunta';
import ModalSubmenu from './ModalSubmenu';
import ModalRespuesta from './ModalRespuesta';
import VerticalNav from './VerticalNav2';  // Asegúrate de que el nombre y la ruta sean correctos
import Navbar3 from './Navbar3';  // Asegúrate de que el nombre y la ruta sean correctos
import Footer from './Footer3';  // Asegúrate de que el nombre y la ruta sean correctos
import './MainView.css';

const MainView = () => {
    const [isModalAgendaOpen, setModalAgendaOpen] = useState(false);
    const [isModalChatbotOpen, setModalChatbotOpen] = useState(false);
    const [isModalSubmenuOpen, setModalSubmenuOpen] = useState(false);
    const [isModalRespuestaOpen, setModalRespuestaOpen] = useState(false);

    return (
        <div className="main-view-container">
            <Navbar3 />
            <div className="content-wrapper">
                <VerticalNav />
                <div className="content">
                    <button className="styled-button" onClick={() => setModalAgendaOpen(true)}>Agenda</button>
                    <button className="styled-button" onClick={() => setModalChatbotOpen(true)}>Chatbot Preguntas</button>
                    <button className="styled-button" onClick={() => setModalSubmenuOpen(true)}>Submenú</button>
                    <button className="styled-button" onClick={() => setModalRespuestaOpen(true)}>Respuesta</button>

                    <ModalAgenda isOpen={isModalAgendaOpen} onRequestClose={() => setModalAgendaOpen(false)} />
                    <ModalChatbotPregunta isOpen={isModalChatbotOpen} onRequestClose={() => setModalChatbotOpen(false)} />
                    <ModalSubmenu isOpen={isModalSubmenuOpen} onRequestClose={() => setModalSubmenuOpen(false)} />
                    <ModalRespuesta isOpen={isModalRespuestaOpen} onRequestClose={() => setModalRespuestaOpen(false)} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainView;
