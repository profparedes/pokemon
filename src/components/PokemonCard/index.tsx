import { memo } from 'react';

import { Link } from 'react-router-dom';
import { PokemonType } from 'Types/pokemon';

import { unslugify } from 'helpers';

import { CardContainer, TypeList } from './style';

interface IPokemonCardProps {
  pokemon: PokemonType;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => (
  <CardContainer
    typeColor1={pokemon.types[0]}
    typeColor2={pokemon.types.length > 1 ? pokemon.types[1] : pokemon.types[0]}
    bgColor={pokemon.color}
    className="p-3 position-relative"
  >
    <div className="d-flex justify-content-between">
      <Link
        to={`/${pokemon.name}`}
        className="h5 text-decoration-none stretched-link"
      >
        {unslugify(pokemon.name)}
      </Link>
      <h2 className="fw-bold">{pokemon.pokedexIndex}</h2>
    </div>
    <div className="d-flex justify-content-between">
      <ul className="list-unstyled">
        {pokemon.types.map((type) => (
          <TypeList className="mb-2 py-2 px-4 text-center" key={type}>
            {type}
          </TypeList>
        ))}
      </ul>
      {pokemon.image && (
        <img
          className="img-fluid"
          style={{ maxWidth: 180 }}
          src={pokemon.image}
          alt={pokemon.name}
        />
      )}
    </div>
  </CardContainer>
);

export default memo(PokemonCard);
