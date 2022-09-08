export type PokemonsQueryResultArrayType = {
  id: number;
  name: string;
  height?: number;
  weight?: number;

  specy: {
    color: {
      name: string;
    };
    gender_rate?: number;
    has_gender_differences?: boolean;
    descriptions?: {
      text: string;
    }[];
  };
  types: {
    data: {
      type: {
        name: string;
      };
    }[];
  };
  images: { sprites: string }[];
  moves: { move: { name: string } }[];
  stats: { value: number; stat: { name: string } }[];
};

export type PokemonsQueryResultDataType = {
  results: [];
};

export type PokemonType = {
  id: number;
  pokedexIndex: string;
  name: string;
  height?: number;
  weight?: number;
  color: string;
  types: string[];
  image: string | null;
  gender?: { m: number; f: number };
  description?: string;
  move?: string;
  stats?: { value: number; name: string }[];
};
