import { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column; /* Coloca los elementos en una columna */
  max-width: 400px; /* Ancho máximo del formulario */
  margin: 0 auto; /* Centrar el formulario */
  padding: 20px; /* Espaciado interno */
  background-color: #ffffff; /* Color de fondo blanco */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

const Input = styled.input`
  margin-bottom: 15px; /* Espacio entre los campos */
  padding: 10px; /* Espaciado interno */
  border: 1px solid #ccc; /* Borde gris claro */
  border-radius: 5px; /* Bordes redondeados */
  font-size: 1rem; /* Tamaño de la fuente */
  
  &:focus {
    border-color: #4caf50; /* Cambia el color del borde al enfocar */
    outline: none; /* Elimina el contorno predeterminado */
  }
`;

const Button = styled.button`
  padding: 10px; /* Espaciado interno */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  background-color: #4caf50; /* Color de fondo verde */
  color: white; /* Color del texto */
  font-size: 1rem; /* Tamaño de la fuente */
  cursor: pointer; /* Cambia el cursor al pasar el ratón */
  transition: background-color 0.3s ease; /* Transición suave */

  &:hover {
    background-color: #45a049; /* Cambia el color de fondo al pasar el ratón */
  }
`;

const ErrorMessage = styled.p`
  color: red; /* Color del texto de error */
  font-size: 0.9rem; /* Tamaño de fuente del error */
`;

const SuccessMessage = styled.p`
  color: green; /* Color del texto de éxito */
  font-size: 0.9rem; /* Tamaño de fuente del éxito */
`;


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [error, setError] = useState('')
const [success, setSuccess] = useState('')
const {state} = useContext(ContextGlobal)

const handleSubmit = (e) => {
  e.preventDefault()
  if (name.length <= 5) {
    setError('verifique su informacion nuevamente')
    return
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    setError('Por favor verifique su información nuevamente');
    return;
  }
  setError('');
    setSuccess(`Gracias ${name}, te contactaremos cuando antes vía mail`);
    console.log({ name, email });
}
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
      <Input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </FormContainer>
  );
};

export default Form;
