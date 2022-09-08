import { memo } from 'react';

import { Container } from 'react-bootstrap';

import PokemonLogo from 'assets/PokemonLogo.png';

import { ImgFooter } from './style';

const Footer: React.FC = () => (
  <Container className="d-flex justify-content-center align-items-end">
    <div>
      <ImgFooter src={PokemonLogo} alt="perfil" />
    </div>
    <p>v4</p>
  </Container>
);

export default memo(Footer);
