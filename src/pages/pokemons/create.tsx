import { NextPage } from 'next'
import { AdminLayout } from '@layout'
import { Card } from 'react-bootstrap'
import PokemonForm from '@components/Pokemon/PokemonForm'

const PokemonsCreate: NextPage = () => (
  <AdminLayout>
    <Card>
      <Card.Header>Add new Pokémon</Card.Header>
      <Card.Body>
        <PokemonForm />
      </Card.Body>
    </Card>
  </AdminLayout>
)

export default PokemonsCreate
