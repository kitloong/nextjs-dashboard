import { GetServerSideProps, NextPage } from 'next'
import { AdminLayout } from '@layout'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import { Pokemon } from '@models/pokemon'
import { Resource } from '@models/resource'
import React from 'react'
import { Pagination } from '@components/Pagination'
import { PokemonList } from '@components/Pokemon'

type Props = {
  pokemonResource: Resource<Pokemon>;
}

const Pokemons: NextPage<Props> = (props) => {
  const {
    pokemonResource: {
      data: pokemons, meta,
    },
  } = props

  return (
    <AdminLayout>
      <Card>
        <Card.Header>Pokémon</Card.Header>
        <Card.Body>
          <Pagination meta={meta} />
          <PokemonList pokemons={pokemons} />
          <Pagination meta={meta} />
        </Card.Body>
      </Card>
    </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const pokemonListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons` || ''
  let page = 1
  if (context.query?.page && typeof context.query.page === 'string') {
    page = parseInt(context.query.page, 10)
  }

  let perPage = 20
  if (context.query?.per_page && typeof context.query.per_page === 'string') {
    perPage = parseInt(context.query.per_page.toString(), 10)
  }

  let sort = 'id'
  if (context.query?.sort && typeof context.query.sort === 'string') {
    sort = context.query.sort
  }

  let order = 'asc'
  if (context.query?.order && typeof context.query.order === 'string') {
    order = context.query.order
  }

  const { data: pokemons, headers } = await axios.get<Pokemon[]>(pokemonListURL, {
    params: {
      _page: page,
      _limit: perPage,
      _sort: sort,
      _order: order,
    },
  })

  const getTo = (total: number, p: number, pp: number) => {
    if (p === 1) {
      return total < pp ? total : pp
    }

    return (p - 1) * pp + pp
  }

  const total = parseInt(headers['x-total-count'], 10)
  const pokemonResource: Resource<Pokemon> = {
    data: pokemons,
    meta: {
      current_page: page,
      last_page: Math.ceil(total / perPage),
      from: page === 1 ? 1 : (page - 1) * perPage + 1,
      to: getTo(total, page, perPage),
      per_page: perPage,
      total,
    },
  }

  return {
    props: {
      pokemonResource,
    }, // will be passed to the page component as props
  }
}

export default Pokemons
