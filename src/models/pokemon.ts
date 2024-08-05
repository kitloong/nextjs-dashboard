import { Type } from '@/models/type'
import { EggGroup } from '@/models/egg-group'

export interface Pokemon {
  id: number;
  identifier: string;
  pokemondb_identifier: string;
  name: string;
  types: Type[];
  egg_groups: EggGroup[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  total: number;
}
