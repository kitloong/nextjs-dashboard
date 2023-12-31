import { Pokemon } from '@/models/pokemon'
import { notFound } from 'next/navigation'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import PokemonForm from '@/components/Pokemon/PokemonForm'

type Props = {
  pokemon: Pokemon;
}

const fetchPokemon = async (params: { id: string }): Promise<Props> => {
  const idQuery = params.id

  if (!idQuery) {
    return notFound()
  }

  const id = Number(idQuery)

  const pokemonURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons/${id}` || ''

  try {
    const res = await fetch(pokemonURL, {
      method: 'GET',
    })

    if (!res.ok) {
      return notFound()
    }

    const pokemon: Pokemon = await res.json()

    return {
      pokemon,
    }
  } catch (error) {
    return notFound()
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const { pokemon } = await fetchPokemon(params)

  return (
    <Card>
      <CardHeader>Add new Pokémon</CardHeader>
      <CardBody>
        <PokemonForm pokemon={pokemon} />
      </CardBody>
    </Card>
  )
}
