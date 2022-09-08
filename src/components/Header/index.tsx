import { memo } from 'react';

import { Container } from 'react-bootstrap';

import Perfil from 'assets/Perfil.png';

import { HeaderContainer, ImgPerfil } from './style';

const Header: React.FC = () => (
  <HeaderContainer>
    <Container className="d-flex justify-content-between align-items-center">
      <div>
        <h1>Hello, Ash Ketchum</h1>
        <p>Welcome!</p>
      </div>
      <div>
        <ImgPerfil src={Perfil} alt="perfil" />
      </div>
    </Container>
  </HeaderContainer>
);

export default memo(Header);
