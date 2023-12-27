'use client'

import { Card } from 'react-bootstrap'
import PokemonForm from '@/components/Pokemon/PokemonForm'

export default function Page() {
  return (
    <Card>
      <Card.Header>Add new Pokémon</Card.Header>
      <Card.Body>
        <PokemonForm />
      </Card.Body>
    </Card>
  )
}
