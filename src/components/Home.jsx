import React from 'react';

const Home = () => (
    <div className="home-container" id="home">
      <div className="hero-image">
        <img src="/img/arquero.gif" alt="Investigacion Aplicada" />
      </div>
      <div className="info-container">
        <div className="column first-column"></div>
        <div className="column image-column">
          <img src="public/img/investigacion aplicada.gif" alt="Arquero" />
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
          <p>Angel Cartageana</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="column fifth-column"></div>
      </div>
      <div className="separator-line"></div>
    </div>
  );
  

export default Home;
