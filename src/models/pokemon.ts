export interface Pokemon {
  id: number;
  identifier: string;
  pokemondb_identifier: string;
  name: string;
  types: PokemonType[];
  egg_groups: PokemonEggGroup[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  total: number;
}

export const pokemonTypes = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
  'unknown',
  'shadow',
] as const

export type PokemonType = typeof pokemonTypes[number]

export const pokemonEggGroups = [
  'Monster',
  'Water 1',
  'Bug',
  'Flying',
  'Field',
  'Fairy',
  'Grass',
  'Human-Like',
  'Water 3',
  'Mineral',
  'Amorphous',
  'Water 2',
  'Ditto',
  'Dragon',
  'Undiscovered',
] as const

export type PokemonEggGroup = typeof pokemonEggGroups[number]
