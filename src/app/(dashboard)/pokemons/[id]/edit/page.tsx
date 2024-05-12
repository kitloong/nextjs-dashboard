import { Pokemon } from '@/models/pokemon'
import { notFound } from 'next/navigation'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import PokemonForm from '@/components/Page/Pokemon/Form/PokemonForm'
import serverFetch from '@/utils/server-fetch'
import { getLocale } from '@/locales/dictionary'
import { Resource } from '@/models/resource'

const fetchPokemon = async (id: number): Promise<Resource<Pokemon>> => {
  const locale = getLocale()

  const url = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}${locale}_pokemons/${id}` || ''

  try {
    const res = await serverFetch(url, {
      method: 'GET',
    })

    if (!res.ok) {
      return notFound()
    }

    const pokemon: Pokemon = await res.json()

    return {
      data: pokemon,
    }
  } catch (error) {
    return notFound()
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const { data: pokemon } = await fetchPokemon(Number(params.id))

  return (
    <Card>
      <CardHeader>{pokemon.name}</CardHeader>
      <CardBody>
        <PokemonForm pokemon={pokemon} />
      </CardBody>
    </Card>
  )
}
