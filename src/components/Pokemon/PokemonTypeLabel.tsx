import React from 'react'

const typeColorMap: Record<string, string> = {
  normal: '#aa9',
  fighting: '#b54',
  flying: '#89f',
  poison: '#a59',
  ground: '#db5',
  rock: '#ba6',
  bug: '#ab2',
  ghost: '#66b',
  steel: '#aab',
  fire: '#f42',
  water: '#39f',
  grass: '#7c5',
  electric: '#fc3',
  psychic: '#f59',
  ice: '#6cf',
  dragon: '#76e',
  dark: '#754',
  fairy: '#e9e',
  unknown: '#aa9',
  shadow: '#aa9',
}

type Props = {
  type: string;
}

export default function PokemonTypeLabel({ type }: Props) {
  return (
    <span
      className="text-white d-inline-block text-uppercase text-center rounded-1 shadow-sm"
      style={{
        backgroundColor: typeColorMap[type],
        textShadow: '1px 1px 2px rgb(0 0 0 / 70%)',
        fontSize: '.7rem',
        width: '70px',
      }}
    >
      {type}
    </span>
  )
}
