import React from 'react';
import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import miImagen from './images/mi-imagen.jpg';
import './App.css';

// Define your theme if needed
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#00bfae',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00bfae',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}; 
  const CustomComponent = ({ steps }) => {
  const userInput = steps['8'].value;

  let content;
  if (userInput.includes('calendario')) {
    content = (
      <div>
        El calendario académico es...
        <img src={miImagen} alt="Calendario académico" style={{ width: '200px', height: '200px' }} />
        <br />
      </div>
    );
  } else if (userInput.includes('horario')|| userInput.includes('clases')) {
    content = <div>Puedes encontrar tu horario de clases en...</div>;
  } else if (userInput.includes('inscripción')) {
    content = <div>Los períodos de inscripción para cursos son...</div>;
  } else if (userInput.includes('biblioteca')) {
    content = <div>La biblioteca se encuentra en el edificio principal. Sus horarios son de lunes a viernes de 8:00 am a 6:00 pm.</div>;
  } else if (userInput.includes('servicio estudiantil')|| userInput.includes('departamento')) {
    content = <div>Puedes contactar al departamento de servicios estudiantiles al número XXX-XXXX o enviando un correo electrónico a servicios.estudiantiles@ejemplo.com.</div>;
  } else if (userInput.includes('evento importante')|| userInput.includes('eventos')) {
    content = <div>Sí, esta semana se llevará a cabo un evento importante en el campus. Será el día XX a las XX horas en el auditorio principal.</div>;
  } else if (userInput.includes('ayuda')|| userInput.includes('problemas')|| userInput.includes('estres')) {
    content = <div>Puedes obtener ayuda si estás experimentando estrés o problemas emocionales en el departamento de salud mental de la universidad. Puedes visitarlos en la ubicación X o llamar al número XXX-XXXX para programar una cita.</div>;
  } else if (userInput.includes('recursos')|| userInput.includes('discapacidad')) {
    content = <div>Los recursos disponibles para estudiantes con discapacidades incluyen servicios de apoyo académico, adaptaciones en el aula y acceso a tecnología asistiva. Puedes comunicarte con la oficina de servicios para estudiantes con discapacidades para obtener más información.</div>;
  } else if (userInput.includes('asesoramiento')|| userInput.includes('tutoria')) {
    content = <div>Existen varios servicios de asesoramiento y tutoría disponibles para mejorar tu rendimiento académico. Puedes visitar el centro de tutorías o comunicarte con el departamento de asesoramiento académico para obtener más información.</div>;
  } else if (userInput.includes('pasantías')) {
    content = <div>Puedes encontrar pasantías o prácticas profesionales relevantes para tu carrera a través del departamento de empleabilidad de la universidad. Ellos te pueden proporcionar información sobre oportunidades disponibles y ayudarte en el proceso de solicitud.</div>;
  } else if (userInput.includes('curriculum')|| userInput.includes('vitae')) {
    content = <div>La universidad ofrece recursos para ayudarte a escribir tu currículum vitae. Puedes visitar el centro de desarrollo profesional o comunicarte con el departamento de empleabilidad para obtener asesoramiento y plantillas de currículum vitae.</div>;
  } else if (userInput.includes('entrevistas')|| userInput.includes('trabajo')) {
    content = <div>Sí, la universidad ofrece talleres para prepararte para entrevistas de trabajo. Puedes consultar el calendario de eventos del departamento de empleabilidad para conocer las fechas y temas de los talleres disponibles.</div>;
  } else if (userInput.includes('clubes') || userInput.includes('actividades')) {
    content = <div>Hay una variedad de clubes y actividades extracurriculares disponibles en el campus. Puedes obtener más información en la oficina de vida estudiantil o en el sitio web de la universidad.</div>;
  } else if (userInput.includes('actividad')|| userInput.includes('fin de semana')) {
    content = <div>Sí, hay una actividad interesante planeada para el fin de semana. Será el día XX a las XX horas en el lugar X. Puedes obtener más información en la oficina de vida estudiantil o en el sitio web de la universidad.</div>;
  } else if (userInput.includes('alimentacion')|| userInput.includes('cafeterias')) {
    content = <div>En el campus, hay varias opciones de alimentación disponibles, como cafeterías, restaurantes y food trucks. Puedes encontrar más información sobre los lugares y horarios en la oficina de vida estudiantil o en el sitio web de la universidad.</div>;
  } else {
    content = <div>No entendí tu solicitud. Por favor, elige una opción o proporciona más detalles.</div>;
  }

  return content;
};

const App = () => {
  const steps = [
    {
      id: '1',
      message: '¡Hola, soy Arquero, tu sistema de ayuda de Universidad Don Bosco. Estoy aquí para ayudarte y resolver tus necesidades!',
      trigger: '2',
    },
    {
      id: '2',
      message: 'Por favor, ingresa tu número de carnet:',
      trigger: '3',
    },
    {
      id: '3',
      user: true,
      validator: (value) => {
        if (!/^[A-Za-z]{2}\d{6}$/.test(value)) {
          return 'carnet inválido';
        }
        return true;
      },
      trigger: '4',
    },
    {
      id: '4',
      message: "¡Hola, {previousValue}!",
      trigger: '5',
    },
    {
      id: '5',
      message: '¿En qué tema te gustaría recibir información?',
      trigger: '6',
    },
    {
      id: '6',
      options: [
        { value: 'menu', label: 'Menu', trigger: '7' },
        { value: 'Preguntar', label: 'Preguntar', trigger: '8' },
      ],
    },
    {
      id: '7',
      options: [
        { value: 'Información académica y administrativa', label: 'Información académica y administrativa', trigger: '9' },
        { value: 'Recursos y servicios del campus', label: 'Recursos y servicios del campus', trigger: '10' },
        { value: 'Apoyo y bienestar estudiantil',  label : 'Apoyo y bienestar estudiantil', trigger: '11' },
        { value: 'Orientación sobre carrera y desarrollo profesional', label: 'Orientación sobre carrera y desarrollo profesional', trigger: '12' },
        { value: 'Vida estudiantil y eventos sociales', label: 'Vida estudiantil y eventos sociales', trigger: '13' },
      ],
    },
    {
      id: '8',
      user: true,
      trigger: '14',
    },
    {
      id: '9',
      options: [
        { value: 'calendario', label: 'Calendario académico', trigger: '18' },
        { value: 'horario', label: 'Horario de clases', trigger: '19' },
        { value: 'inscripción', label: 'Períodos de inscripción', trigger: '20' },
      ],
    },
    {
      id: '10',
      options: [
        { value: 'biblioteca', label: '¿Dónde está la biblioteca y cuáles son sus horarios?', trigger: '21' },
        { value: 'departamento de servicios estudiantiles', label: '¿Cómo puedo contactar al departamento de servicios estudiantiles?', trigger: '22' },
        { value: 'evento importante', label: '¿Hay algún evento importante en el campus esta semana?', trigger: '23' },
      ],
    },
    {
      id: '11',
      options: [
        { value: 'ayuda', label: '¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales?', trigger: '24' },
        { value: 'recursos', label: '¿Cuáles son los recursos disponibles para estudiantes con discapacidades?', trigger: '25' },
        { value: 'asesoramiento', label: '¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mi rendimiento académico?', trigger: '26' },
      ],
    },
    {
      id: '12',
      options: [
        { value: 'pasantías', label: '¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera?', trigger: '27' },
        { value: 'currículum vitae', label: '¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae?', trigger: '28' },
        { value: 'entrevistas de trabajo', label: '¿Hay talleres disponibles para prepararme para entrevistas de trabajo?', trigger: '29' },
      ],
    },
    {
      id: '13',
      options: [
        { value: 'clubes', label: '¿Qué clubes o actividades extracurriculares están disponibles en el campus?', trigger: '30' },
        { value: 'actividad interesante', label: '¿Hay alguna actividad interesante planeada para el fin de semana?', trigger: '31' },
        { value: 'opciones de alimentación', label: '¿Cuáles son las opciones de alimentación disponibles en el campus?', trigger: '32' },
      ],
    },
    {
      id: '14',
      component: <CustomComponent />,
      asMessage: true,
      trigger: '15',
    },
    {
      id: '15',
      message: '¿Necesitas ayuda en algo más?',
      trigger: '16',
    },
    {
      id: '16',
      options: [
        { value: 'si', label: 'Sí', trigger: '17' },
        { value: 'no', label: 'No', end: true },
      ],
    },
    {
      id: '17',
      message: 'Gracias por seguir con nosotros',
      trigger: '5',
   },   
    {
      id: '18',
      component: (
        <div>
          El calendario académico es...
          <img src={miImagen} alt="Calendario académico" style={{ width: '200px', height: '200px' }} />
        </div>
      ),
      trigger: '15',
    },
    {
      id: '19',
      message: 'Puedes encontrar tu horario de clases en...',
      trigger: '15',
    },
    {
      id: '20',
      message: 'Los períodos de inscripción para cursos son...',
      trigger: '15',
    },
    {
      id: '21',
      message: 'La biblioteca se encuentra en el edificio principal. Sus horarios son de lunes a viernes de 8:00 am a 6:00 pm.',
      trigger: '15',
    },
    {
      id: '22',
      message: 'Puedes contactar al departamento de servicios estudiantiles al número XXX-XXXX o enviando un correo electrónico a servicios.estudiantiles@ejemplo.com.',
      trigger: '15',
    },
    {
      id: '23',
      message: 'Sí, esta semana se llevará a cabo un evento importante en el campus. Será el día XX a las XX horas en el auditorio principal.',
      trigger: '15',
    },
    {
      id: '24',
      message: 'Puedes obtener ayuda si estás experimentando estrés o problemas emocionales en el departamento de salud mental de la universidad. Puedes visitarlos en la ubicación X o llamar al número XXX-XXXX para programar una cita.',
      trigger: '15',
    },
    {
      id: '25',
      message: 'Los recursos disponibles para estudiantes con discapacidades incluyen servicios de apoyo académico, adaptaciones en el aula y acceso a tecnología asistiva. Puedes comunicarte con la oficina de servicios para estudiantes con discapacidades para obtener más información.',
      trigger: '15',
    },
    {
      id: '26',
      message: 'Existen varios servicios de asesoramiento y tutoría disponibles para mejorar tu rendimiento académico. Puedes visitar el centro de tutorías o comunicarte con el departamento de asesoramiento académico para obtener más información.',
      trigger: '15',
    },
    {
      id: '27',
      message: 'Puedes encontrar pasantías o prácticas profesionales relevantes para tu carrera a través del departamento de empleabilidad de la universidad. Ellos te pueden proporcionar información sobre oportunidades disponibles y ayudarte en el proceso de solicitud.',
      trigger: '15',
    },
    {
      id: '28',
      message: 'La universidad ofrece recursos para ayudarte a escribir tu currículum vitae. Puedes visitar el centro de desarrollo profesional o comunicarte con el departamento de empleabilidad para obtener asesoramiento y plantillas de currículum vitae.',
      trigger: '15',
    },
    {
      id: '29',
      message: 'Sí, la universidad ofrece talleres para prepararte para entrevistas de trabajo. Puedes consultar el calendario de eventos del departamento de empleabilidad para conocer las fechas y temas de los talleres disponibles.',
      trigger: '15',
    },
    {
      id: '30',
      message: 'Hay una variedad de clubes y actividades extracurriculares disponibles en el campus. Puedes obtener más información en la oficina de vida estudiantil o en el sitio web de la universidad.',
      trigger: '15',
    },
    {
      id: '31',
      message: 'Sí, hay una actividad interesante planeada para el fin de semana. Será el día XX a las XX horas en el lugar X. Puedes obtener más información en la oficina de vida estudiantil o en el sitio web de la universidad.',
      trigger: '15',
    },
    {
      id: '32',
      message: 'En el campus, hay varias opciones de alimentación disponibles, como cafeterías, restaurantes y food trucks. Puedes encontrar más información sobre los lugares y horarios en la oficina de vida estudiantil o en el sitio web de la universidad.',
      trigger: '15',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Chatbot
        steps={steps}
        speechSynthesis={{ enable: true, lang: 'es' }}
        handleEnd={() => console.log('Chatbot conversation ended.')}
      />
    </ThemeProvider>
  );
};

export default Chatbot;
