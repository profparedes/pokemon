import { memo, useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loading from 'assets/Loading.gif';

import { usePokemon } from 'context/PokemonContext';

import Footer from 'components/Footer';
import Header from 'components/Header';
import PokemonCard from 'components/PokemonCard';

import useTitle from 'hooks/useTitle';

const Home: React.FC = () => {
  const setTitle = useTitle();
  const { pokemons, loading, hasMorePages, fetchNextPage } = usePokemon();

  useEffect(() => {
    setTitle('pokemon');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      {loading && pokemons.length === 0 && (
        <div className="d-flex justify-content-center">
          <img src={Loading} alt="loading" />
        </div>
      )}
      {pokemons.length > 0 && (
        <Container className="mt-3">
          <p>Which pokemon would you choose?</p>
          <InfiniteScroll
            dataLength={pokemons.length}
            next={fetchNextPage}
            hasMore={hasMorePages}
            loader={
              <div className="d-flex justify-content-center">
                <img src={Loading} alt="loading" />
              </div>
            }
            style={{ overflow: 'visible' }}
          >
            <Row className="justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
              {pokemons.map((pokemon) => (
                <Col key={pokemon.id}>
                  <PokemonCard pokemon={pokemon} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        </Container>
      )}
      <Footer />
    </>
  );
};

export default memo(Home);
