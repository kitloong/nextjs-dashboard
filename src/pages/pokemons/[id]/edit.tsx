import { GetServerSideProps, NextPage } from 'next'
import { AdminLayout } from '@layout'
import { Card } from 'react-bootstrap'
import PokemonForm from '@components/Pokemon/PokemonForm'
import { Pokemon } from '@models/pokemon'
import axios from 'axios'

type Props = {
  pokemon: Pokemon;
}

const PokemonsEdit: NextPage<Props> = (props) => {
  const { pokemon } = props

  return (
    <AdminLayout>
      <Card>
        <Card.Header>
          Edit Pokémon -&nbsp;
          {pokemon.name}
        </Card.Header>
        <Card.Body>
          <PokemonForm pokemon={pokemon} />
        </Card.Body>
      </Card>
    </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { id: idQuery } = context.query

  if (!idQuery) {
    return {
      notFound: true,
    }
  }

  if (typeof idQuery !== 'string') {
    return {
      notFound: true,
    }
  }

  const id = Number(idQuery)

  const pokemonURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons/${id}` || ''

  try {
    const { data: pokemon } = await axios.get<Pokemon>(pokemonURL)

    return {
      props: {
        pokemon,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default PokemonsEdit
