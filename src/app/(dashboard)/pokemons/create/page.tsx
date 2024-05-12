import { Card, CardBody, CardHeader } from 'react-bootstrap'
import PokemonForm from '@/components/Page/Pokemon/Form/PokemonForm'
import { getDictionary } from '@/locales/dictionary'

export default async function Page() {
  const dict = await getDictionary()

  return (
    <Card>
      <CardHeader>{dict.pokemons.add_new}</CardHeader>
      <CardBody>
        <PokemonForm />
      </CardBody>
    </Card>
  )
}
