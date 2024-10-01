import styled from "styled-components";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Container = styled.div`
  max-width: 600px; /* Ancho máximo para el contenedor */
  margin: 0 auto; /* Centrar el contenedor */
  padding: 20px; /* Espaciado interno */
  background-color: #ffffff; /* Color de fondo blanco */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
  text-align: center; /* Centrar el texto */
`;

const Title = styled.h2`
  font-size: 2rem; /* Tamaño de fuente del título */
  color: #333; /* Color del texto */
  margin-bottom: 10px; /* Espacio debajo del título */
`;

const Description = styled.p`
  font-size: 1rem; /* Tamaño de fuente del párrafo */
  color: #666; /* Color del texto del párrafo */
  margin-bottom: 20px; /* Espacio debajo del párrafo */
`;
const Contact = () => {
  return (
    <Container>
      <Title>Want to know more?</Title>
      <Description>Send us your questions and we will contact you</Description>
      <Form />
    </Container>
  );
};

export default Contact;
