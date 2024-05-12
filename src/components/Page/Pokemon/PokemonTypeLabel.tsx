import React from 'react'

import { Type, TypeIdentifier } from '@/models/type'

const typeColorMap = new Map<TypeIdentifier, string>([
  [TypeIdentifier.Normal, '#aa9'],
  [TypeIdentifier.Fighting, '#b54'],
  [TypeIdentifier.Flying, '#89f'],
  [TypeIdentifier.Poison, '#a59'],
  [TypeIdentifier.Ground, '#db5'],
  [TypeIdentifier.Rock, '#ba6'],
  [TypeIdentifier.Bug, '#ab2'],
  [TypeIdentifier.Ghost, '#66b'],
  [TypeIdentifier.Steel, '#aab'],
  [TypeIdentifier.Fire, '#f42'],
  [TypeIdentifier.Water, '#39f'],
  [TypeIdentifier.Grass, '#7c5'],
  [TypeIdentifier.Electric, '#fc3'],
  [TypeIdentifier.Psychic, '#f59'],
  [TypeIdentifier.Ice, '#6cf'],
  [TypeIdentifier.Dragon, '#76e'],
  [TypeIdentifier.Dark, '#754'],
  [TypeIdentifier.Fairy, '#e9e'],
  [TypeIdentifier.Unknown, '#6AA596'],
  [TypeIdentifier.Shadow, '#705898'],
])

type Props = {
  type: Type;
}

export default function PokemonTypeLabel({ type }: Props) {
  return (
    <span
      className="text-white d-inline-block text-uppercase text-center rounded-1 shadow-sm"
      style={{
        backgroundColor: typeColorMap.get(type.id),
        textShadow: '1px 1px 2px rgb(0 0 0 / 70%)',
        fontSize: '.7rem',
        width: '70px',
      }}
    >
      {type.name}
    </span>
  )
}
