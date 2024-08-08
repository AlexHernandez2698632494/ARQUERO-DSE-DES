import React from 'react';
import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import  './Chatbot.css';


const theme = {
  background: 'transparent', // fondo del CSS
  fontFamily: 'Arial, sans-serif',
  headerBgColor: '#153999', 
  headerFontColor: '#fff',
  headerFontSize: '18px',
  botBubbleColor: '#153999', 
  botFontColor: '#fff',
  userBubbleColor: '#e0e0e0',
  userFontColor: '#333',
};

const CustomComponent = ({ steps }) => {
  const userInput = steps['8'].value;

  let content;
  if (userInput.includes('calendario')) {
    content = <div>El calendario académico para este semestre se encuentra en el portal web oficial de la Universidad Don Bosco, en la sección de estudiantes o académica. También puedes obtenerlo en la secretaría de tu facultad.</div>;
  } else if (userInput.includes('horario') || userInput.includes('clases')) {
    content = <div>Tu horario de clases está disponible en el portal de estudiantes de la universidad. Inicia sesión con tus credenciales de estudiante para acceder a tu horario específico.</div>;
  } else if (userInput.includes('inscripción')) {
    content = <div>Los períodos de inscripción para cursos se anuncian en el calendario académico y también se comunican a través del portal de estudiantes y las redes sociales de la universidad.</div>;
  } else if (userInput.includes('biblioteca')) {
    content = <div>La biblioteca de la Universidad Don Bosco suele estar ubicada en el campus principal. Sus horarios son de lunes a viernes de 7:00 am a 5:00 pm.</div>;
  } else if (userInput.includes('servicio estudiantil') || userInput.includes('departamento')) {
    content = <div>Puedes contactar al departamento de servicios estudiantiles a través del portal de la universidad, por correo electrónico o por teléfono. La información de contacto debe estar disponible en la sección de servicios estudiantiles del sitio web de la universidad.</div>;
  } else if (userInput.includes('evento importante') || userInput.includes('eventos')) {
    content = <div>Los eventos importantes se anuncian en el calendario de eventos de la universidad, que puede encontrarse en el sitio web oficial y en las redes sociales de la universidad.</div>;
  } else if (userInput.includes('ayuda') || userInput.includes('problemas') || userInput.includes('estres')) {
    content = <div>La universidad tiene un centro de bienestar o servicios psicológicos donde puedes obtener ayuda. Estos servicios pueden incluir consejería y apoyo emocional. Verifica la ubicación y los horarios en el sitio web de la universidad o consulta en el departamento de servicios estudiantiles.</div>;
  } else if (userInput.includes('recursos') || userInput.includes('discapacidad')) {
    content = <div>La Universidad Don Bosco ofrece recursos y apoyo para estudiantes con discapacidades. Estos pueden incluir adaptaciones en el aula, tecnología asistiva y servicios de tutoría. Contacta al departamento de servicios estudiantiles para obtener más información.</div>;
  } else if (userInput.includes('asesoramiento') || userInput.includes('tutoria')) {
    content = <div>Existen varios servicios de asesoramiento y tutoría disponibles para mejorar tu rendimiento académico. Puedes visitar el centro de tutorías o comunicarte con el departamento de asesoramiento académico para obtener más información.</div>;
  } else if (userInput.includes('pasantías')) {
    content = <div>Puedes encontrar pasantías o prácticas profesionales relevantes para tu carrera a través del departamento de empleabilidad de la universidad. Ellos te pueden proporcionar información sobre oportunidades disponibles y ayudarte en el proceso de solicitud.</div>;
  } else if (userInput.includes('curriculum') || userInput.includes('vitae')) {
    content = <div>La universidad ofrece recursos para ayudarte a escribir tu currículum vitae. Puedes visitar el centro de desarrollo profesional o comunicarte con el departamento de empleabilidad para obtener asesoramiento y plantillas de currículum vitae.</div>;
  } else if (userInput.includes('entrevistas') || userInput.includes('trabajo')) {
    content = <div>Sí, la universidad ofrece talleres para prepararte para entrevistas de trabajo. Puedes consultar el calendario de eventos del departamento de empleabilidad para conocer las fechas y temas de los talleres disponibles.</div>;
  } else if (userInput.includes('clubes') || userInput.includes('actividades')) {
    content = <div>Hay una variedad de clubes y actividades extracurriculares disponibles en el campus. Puedes obtener más información en la oficina de vida estudiantil o en el sitio web de la universidad.</div>;
  } else if (userInput.includes('actividad') || userInput.includes('fin de semana')) {
    content = <div>Las actividades del fin de semana se anuncian en el calendario de eventos de la universidad. Consulta el sitio web oficial y las redes sociales para obtener la información más reciente.</div>;
  } else if (userInput.includes('alimentacion') || userInput.includes('cafeterias')) {
    content = <div>El campus generalmente cuenta con cafeterías y comedores que ofrecen una variedad de opciones de alimentos. Los horarios y menús específicos pueden variar.</div>;
  } else {
    content = <div>No entendí tu solicitud. Por favor, elige una opción o proporciona más detalles.</div>;
  }


  return content;
};

const chatbot = () => {
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
      message: 'El calendario académico para este semestre se encuentra en el portal web oficial de la Universidad Don Bosco, en la sección de estudiantes o académica. También puedes obtenerlo en la secretaría de tu facultad.',
      trigger: '15',
    },
    {
      id: '19',
      message: 'Tu horario de clases está disponible en el portal de estudiantes de la universidad. Inicia sesión con tus credenciales de estudiante para acceder a tu horario específico.',
      trigger: '15',
    },
    {
      id: '20',
      message: 'Los períodos de inscripción para cursos se anuncian en el calendario académico y también se comunican a través del portal de estudiantes y las redes sociales de la universidad.',
      trigger: '15',
    },
    {
      id: '21',
      message: 'La biblioteca de la Universidad Don Bosco suele estar ubicada en el campus principal. Sus horarios son de lunes a viernes de 7:00 am a 5:00 pm.',
      trigger: '15',
    },
    {
      id: '22',
      message: 'Puedes contactar al departamento de servicios estudiantiles a través del portal de la universidad, por correo electrónico o por teléfono. La información de contacto debe estar disponible en la sección de servicios estudiantiles del sitio web de la universidad.',
      trigger: '15',
    },
    {
      id: '23',
      message: 'Los eventos importantes se anuncian en el calendario de eventos de la universidad, que puede encontrarse en el sitio web oficial y en las redes sociales de la universidad.',
      trigger: '15',
    },
    {
      id: '24',
      message: 'La universidad tiene un centro de bienestar o servicios psicológicos donde puedes obtener ayuda. Estos servicios pueden incluir consejería y apoyo emocional. Verifica la ubicación y los horarios en el sitio web de la universidad o consulta en el departamento de servicios estudiantiles.',
      trigger: '15',
    },
    {
      id: '25',
      message: 'La Universidad Don Bosco ofrece recursos y apoyo para estudiantes con discapacidades. Estos pueden incluir adaptaciones en el aula, tecnología asistiva y servicios de tutoría. Contacta al departamento de servicios estudiantiles para obtener más información.',
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
      message: 'Las actividades del fin de semana se anuncian en el calendario de eventos de la universidad. Consulta el sitio web oficial y las redes sociales para obtener la información más reciente.',
      trigger: '15',
    },
    {
      id: '32',
      message: 'El campus generalmente cuenta con cafeterías y comedores que ofrecen una variedad de opciones de alimentos. Los horarios y menús específicos pueden variar.',
      trigger: '15',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Chatbot
        steps={steps}
        handleEnd={() => console.log('Chatbot conversation ended.')}
      />
    </ThemeProvider>
  );
};

export default chatbot;
