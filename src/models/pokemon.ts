export interface Pokemon {
  id: number;
  identifier: string;
  pokemondb_identifier: string;
  name: string;
  types: string[];
  egg_groups: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  total: number;
}
