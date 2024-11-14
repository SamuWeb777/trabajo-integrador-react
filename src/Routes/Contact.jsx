import styled from "styled-components";
import Form from "../Components/Form";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Container = styled.div`
  max-width: 500px; /* Ancho máximo para el contenedor */
  margin: 0 auto; /* Centrar el contenedor */
  padding: 20px; /* Espaciado interno */
  background-color: ${({ theme }) => (theme === 'dark' ? '#333' : '#ffffff')}; /* Cambio dinámico según el tema */
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#333')}; /* Color de texto según el tema */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
  text-align: center; /* Centrar el texto */
`;

const Title = styled.h2`
  font-size: 2rem; /* Tamaño de fuente del título */
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#333')}; /* Color del título según el tema */
  margin-bottom: 10px; /* Espacio debajo del título */
`;

const Description = styled.p`
  font-size: 1rem; /* Tamaño de fuente del párrafo */
  color: ${({ theme }) => (theme === 'dark' ? '#ccc' : '#666')}; /* Color del párrafo según el tema */
  margin-bottom: 20px; /* Espacio debajo del párrafo */
`;
const Contact = () => {
  return (
    <Container>
      <Title>¿Le gustaria saber más?</Title>
      <Description>Envíanos tus consultas y nos pondremos en contacto contigo</Description>
      <Form />
    </Container>
  );
};

export default Contact;
