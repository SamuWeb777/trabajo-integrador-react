import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import img from   "../img/doctor.jpg";
import { useNavigate } from "react-router";
import styled from "styled-components";

// Estilos con styled-components
const CardContainer = styled.div`
  position: relative;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.cardBackground}; // Cambia con el tema
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.text}; // Cambia con el tema
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0;
  color: ${({ theme }) => theme.text}; // Cambia con el tema
`;

const UserId = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.9rem;
  color: grey;
`;

const FavButton = styled.button`
  background-color: ${props => (props.isFav ? '#ff6b6b' : '#4caf50')};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.isFav ? '#ff4a4a' : '#45a049')};
  }
`;
const Card = ({ name, username, id, theme }) => {
  const navigate = useNavigate()
  const {state, addFav, removeFav} = useContext(ContextGlobal);

  const isFav = state.favs.some(fav => fav.id === id)
  const handleaddFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (isFav) {
      removeFav({ id })
    }else{
      addFav({ id, name, username })
    }
  };

  return (
    <CardContainer theme={theme}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <ProfileImage src={img} alt="foto de perfil" onClick={() => navigate(`/detalles/${id}`)}/>
      <InfoContainer className='flex flex-col items-center justify-start'>
        <UserName theme={theme} >
          {name}
        </UserName>
        <UserName theme={theme}> 
          {username}
        </UserName>
        <UserId >
          {id}
        </UserId>
      </InfoContainer>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <FavButton onClick={handleaddFav} >
      {isFav ? 'Eliminar a favoritos' : 'Agregar a favoritos'}
      </FavButton>
    </CardContainer>
  );
};

export default Card;
