import { Fragment, memo, useEffect } from 'react';

import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { TbGenderFemale, TbGenderMale } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';

import Gengar from 'assets/Gengar.gif';
import TCG from 'assets/TCG.png';

import { usePokemon } from 'context/PokemonContext';
import { usePokemonTCG } from 'context/PokemonTCGContext';

import Footer from 'components/Footer';

import { unslugify } from 'helpers';

import useTitle from 'hooks/useTitle';

import {
  CardContainer,
  CardImg,
  DescriptionContainer,
  LoadingContainer,
  TypeList,
} from './style';

const PokemonPage: React.FC = () => {
  const setTitle = useTitle();
  const { pokemonLoading, fetchPokemon, pokemon } = usePokemon();
  const { cards } = usePokemonTCG();
  const { name } = useParams();

  useEffect(() => {
    if (pokemon) {
      setTitle(pokemon.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  useEffect(() => {
    fetchPokemon({ variables: { name } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {pokemonLoading && (
        <LoadingContainer className="d-flex justify-content-center">
          <div className="mt-5">
            <img className="img-fluid" src={Gengar} alt="Loading" />
          </div>
        </LoadingContainer>
      )}
      {!pokemonLoading && pokemon && (
        <CardContainer
          typeColor1={pokemon.types[0]}
          typeColor2={
            pokemon.types.length > 1 ? pokemon.types[1] : pokemon.types[0]
          }
          bgColor={pokemon.color}
          className="p-3 position-relative"
        >
          <Container>
            <Link to="/" className="text-decoration-none fw-bolder">
              &lt;
            </Link>
            <div className="mt-3 d-flex justify-content-between">
              <h2>{unslugify(pokemon.name)}</h2>
              <h2 className="fw-bold">{pokemon.pokedexIndex}</h2>
            </div>
            <ul className="list-unstyled mt-3">
              {pokemon.types.map((type) => (
                <TypeList className="mb-2 py-2 px-4 me-2" key={type}>
                  {type}
                </TypeList>
              ))}
            </ul>
            <div className="d-flex justify-content-center">
              {pokemon.image && (
                <img
                  className="img-fluid"
                  style={{ maxWidth: 240 }}
                  src={pokemon.image}
                  alt={pokemon.name}
                />
              )}
            </div>
            <DescriptionContainer>
              <div>
                <h2 className="fw-bolder">Description:</h2>
                {pokemon.description && <p> {pokemon.description}</p>}
                {pokemon.gender && (
                  <div className="d-flex">
                    <p className="me-4">Gender:</p>
                    <p className="me-3">
                      <TbGenderMale color="#1fbba3" />
                      {pokemon.gender.m}
                    </p>
                    <p>
                      <TbGenderFemale color="#c32bff" />
                      {pokemon.gender.f}
                    </p>
                  </div>
                )}
              </div>
              <Row className="mt-4">
                {pokemon.weight && (
                  <Col className="text-center border-end">
                    <p>Weight:</p>
                    <p>{pokemon.weight} Kg</p>
                  </Col>
                )}
                {pokemon.height && (
                  <Col className="text-center">
                    <p>Height:</p>
                    <p>{pokemon.height} m</p>
                  </Col>
                )}
                {pokemon.move && (
                  <Col className="text-center border-start">
                    <p>Move:</p>
                    <p>{unslugify(pokemon.move)}</p>
                  </Col>
                )}
              </Row>
              <h2 className="fw-bolder">Feature:</h2>
              <Row className="mt-3">
                {pokemon.stats?.map((stat) => (
                  <Fragment key={stat.name}>
                    <Col className="col-4 col-sm-3 mb-1">
                      {unslugify(stat.name)}
                    </Col>
                    <Col className="col-4 col-sm-1 mb-1">{stat.value}</Col>
                    <Col className="col-4 col-sm-8 mb-1">
                      {stat.value > 50 ? (
                        <ProgressBar
                          style={{ maxHeight: 10 }}
                          variant="success"
                          now={stat.value}
                        />
                      ) : (
                        <ProgressBar
                          style={{ maxHeight: 10 }}
                          variant="danger"
                          now={stat.value}
                        />
                      )}
                    </Col>
                  </Fragment>
                ))}
              </Row>
            </DescriptionContainer>
          </Container>
          <Container>
            <div className="d-flex justify-content-center mt-3">
              <img
                style={{ maxWidth: 300 }}
                src={TCG}
                alt="pokemon trading card game"
              />
            </div>
            <Row className="row-cols-1 g-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mt-4 justify-content-center">
              {cards.map((card) => (
                <Col className="text-center" key={card.id}>
                  <CardImg
                    className="img-fluid"
                    src={card.images.small}
                    alt={card.id}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <Footer />
        </CardContainer>
      )}
    </>
  );
};

export default memo(PokemonPage);
