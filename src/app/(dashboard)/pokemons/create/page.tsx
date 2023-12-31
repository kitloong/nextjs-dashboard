import { Card, CardBody, CardHeader } from 'react-bootstrap'
import PokemonForm from '@/components/Pokemon/PokemonForm'

export default function Page() {
  return (
    <Card>
      <CardHeader>Add new Pokémon</CardHeader>
      <CardBody>
        <PokemonForm />
      </CardBody>
    </Card>
  )
}
