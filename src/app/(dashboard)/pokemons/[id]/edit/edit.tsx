'use client'

import { Card } from 'react-bootstrap'
import PokemonForm from '@/components/Pokemon/PokemonForm'
import { Pokemon } from '@/models/pokemon'

export type Props = {
  pokemon: Pokemon;
}

export default function Edit(props: Props) {
  const { pokemon } = props

  return (
    <Card>
      <Card.Header>Add new Pokémon</Card.Header>
      <Card.Body>
        <PokemonForm pokemon={pokemon} />
      </Card.Body>
    </Card>
  )
}
