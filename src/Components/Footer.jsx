import styled from "styled-components";
import face from "../img/ico-facebook.png"
import insta from "../img/ico-instagram.png"
import tik from "../img/ico-tiktok.png"
import wpp from "../img/ico-whatsapp.png"
// Estilos del footer usando styled-components
const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 100px;
  margin: 10px 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.7); // Fondo blanco con opacidad para probar

  & > a {
    display: block;
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
    background-color: rgba(0, 0, 0, 0.7); // Fondo blanco con opacidad para probar
    border-radius: 5px; // Bordes redondeados para mejorar la apariencia


    &:hover {
      transform: scale(1.1); // Efecto de agrandado al pasar el ratón
    }
  }
   

  & > a > img {
    width: 100%;
    height: 100%;
    object-fit: contain; // Asegura que la imagen mantenga su aspecto
    opacity: 1; // Asegúrate de que la opacidad sea 1

    }
`;
const Footer = () => {
  return (
    <FooterContainer>
    <FooterText>Powered by: Samuel Ernesto Acuña</FooterText>
    <Logo src="./images/DM.png" alt="DM-logo" />
    <SocialIcons>
      {/* Reemplaza con los enlaces y rutas correctas de tus imágenes */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={face} alt="Facebook" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={insta} alt="Instagram" />
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
        <img src={tik} alt="Tiktok" />
      </a>
      <a href="https://wathsapp.com" target="_blank" rel="noopener noreferrer">
        <img src={wpp} alt="wpp" />
      </a>
    </SocialIcons>
  </FooterContainer>
  )
};

export default Footer;
