import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { PokemonTCGCardType } from 'Types/pokemonTCG';

import { usePokemon } from 'context/PokemonContext';

import Api from 'services/Api';

interface IContextProps {
  cards: PokemonTCGCardType[];
  isLoading: boolean;
  error: string | null;
}

interface IPokemonTCGProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const PokemonTCGProvider: React.FC<IPokemonTCGProviderProps> = ({
  children,
}) => {
  const [cards, setCards] = useState<PokemonTCGCardType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { pokemon } = usePokemon();

  const fetchCards = useCallback(async (search: string) => {
    setIsLoading(true);
    setError(null);

    const params = {
      q: search?.length ? `name:${search}` : undefined,
    };

    try {
      const response = await Api.get('', {
        params,
      });
      setCards(response.data.data);
    } catch {
      // eslint-disable-next-line no-console
      setError('Algo de errado não está certo!');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setCards([]);
    if (pokemon) {
      fetchCards(pokemon.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          cards,
          isLoading,
          error,
        }),
        [cards, isLoading, error],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const usePokemonTCG = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePokemonTCGHook must be within PokemonTCGProvider');
  }

  return context;
};
