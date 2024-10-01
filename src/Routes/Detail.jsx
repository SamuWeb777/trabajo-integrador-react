//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContextGlobal } from "../Components/utils/global.context";
import img from "../img/doctor.jpg";
import styled from "styled-components";

// Estilos con styled-components
const DetailContainer = styled.div`
  margin: 2rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled.img`
  border-radius: 1.5rem 1.5rem 0 0;
  width: 50%;
  @media (max-width: 640px) {
    width: 100%;
    border-radius: 1.5rem;
  }
`;

const InfoContainer = styled.div`
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0 0 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 640px) {
    border-radius: 0 0 1.5rem 1.5rem;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #374151;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const TextInfo = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: ${(props) => (props.darkMode ? "#d1d5db" : "#6b7280")};
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const WebsiteLink = styled.span`
  color: #2563eb;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams()
  const {state} = useContext(ContextGlobal)
  const [professional, setProfessional] = useState(null)

  useEffect(() => {
    fetch(`/api/professionals/${id}`)
      .then(response => response.json())
      .then(data => setProfessional(data));
  }, [id])

  if (!professional) return <div className={state.theme}>Loading...</div>;

  
  return (
    
      <>
          <Title>Detalles</Title>
          <DetailContainer>
            <ProfileImage src={img} alt="Foto de perfil del profesional"/>
            <InfoContainer>
              <div className="flex flex-col items-center">
                <SectionTitle>{professional.name}</SectionTitle>
                <InfoColumn>
                  <TextInfo darkMode>Username: {professional.username}</TextInfo>
                  <TextInfo darkMode>email: {professional.email}</TextInfo>
                </InfoColumn>
              </div>
              <ContactInfo>
                <InfoColumn>
                <SectionTitle>Contacto</SectionTitle>
                  <TextInfo darkMode>Télefono: {professional.phone}</TextInfo>
                  <WebsiteLink >Website: {professional.website}</WebsiteLink>
                <SectionTitle>Empresa</SectionTitle>
                  <TextInfo>{professional.company.name}</TextInfo>
                </InfoColumn>
              </ContactInfo>
            </InfoContainer>
          </DetailContainer>
          {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
          {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        </>
        
  );
};

export default Detail;
