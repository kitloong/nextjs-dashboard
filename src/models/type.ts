export interface Type {
  id: number;
  name: string;
}

export enum TypeIdentifier {
  Normal = 1,
  Fighting,
  Flying,
  Poison,
  Ground,
  Rock,
  Bug,
  Ghost,
  Steel,
  Fire,
  Water,
  Grass,
  Electric,
  Psychic,
  Ice,
  Dragon,
  Dark,
  Fairy,
  Unknown = 10001,
  Shadow,
}
