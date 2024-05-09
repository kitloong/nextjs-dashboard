'use client'

import { Button, Card } from 'react-bootstrap'
import React from 'react'
import { newResource, Resource } from '@/models/resource'
import { Pokemon } from '@/models/pokemon'
import Pagination from '@/components/Pagination/Pagination'
import PokemonList from '@/components/Pokemon/PokemonList'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import useSWR from 'swr'

type Props = {
  props: {
    pokemonResourceFallback: Resource<Pokemon>;
    page: number;
    perPage: number;
    sort: string;
    order: string;
  };
}

export default function Index(props: Props) {
  const {
    props: {
      pokemonResourceFallback,
      page,
      perPage,
      sort,
      order,
    },
  } = props

  const router = useRouter()

  const pokemonListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons` || ''
  const url = new URL(pokemonListURL)
  url.searchParams.set('_page', page.toString())
  url.searchParams.set('_limit', perPage.toString())
  url.searchParams.set('_sort', sort)
  url.searchParams.set('_order', order)

  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(async (res) => {
    const pokemons: Pokemon[] = await res.json()
    const total = Number(res.headers.get('x-total-count')) ?? 0
    return newResource(pokemons, total, page, perPage)
  })

  const { data: pokemonResource } = useSWR(url, fetcher, {
    fallbackData: pokemonResourceFallback,
  })

  return (
    <Card>
      <Card.Header>Pokémon</Card.Header>
      <Card.Body>
        <div className="mb-3 text-end">
          <Button variant="success" onClick={() => router.push('/pokemons/create')}>
            <FontAwesomeIcon icon={faPlus} fixedWidth />
            Add new
          </Button>
        </div>
        <Pagination meta={pokemonResource.meta} />
        <PokemonList pokemons={pokemonResource.data} />
        <Pagination meta={pokemonResource.meta} />
      </Card.Body>
    </Card>
  )
}
