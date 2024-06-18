'use client'

import { Button, Card } from 'react-bootstrap'
import React from 'react'
import { newResource, ResourceCollection } from '@/models/resource'
import { Pokemon } from '@/models/pokemon'
import Pagination from '@/components/Pagination/Pagination'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import useSWR from 'swr'
import PokemonList from '@/components/Page/Pokemon/PokemonList'
import Cookies from 'js-cookie'
import useDictionary from '@/locales/dictionary-hook'

type Props = {
  props: {
    pokemonResource: ResourceCollection<Pokemon>;
    page: number;
    perPage: number;
    sort: string;
    order: string;
  };
}

export default function Index(props: Props) {
  const {
    props: {
      pokemonResource: pokemonResourceFallback,
      page,
      perPage,
      sort,
      order,
    },
  } = props

  const router = useRouter()
  const dict = useDictionary()

  const pokemonListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}${Cookies.get('locale')}_pokemons` || ''
  const url = new URL(pokemonListURL)
  url.searchParams.set('_page', page.toString())
  url.searchParams.set('_limit', perPage.toString())
  url.searchParams.set('_sort', sort)
  url.searchParams.set('_order', order)

  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(async (res) => {
    if (res.ok) {
      const pokemons: Pokemon[] = await res.json()
      const total = Number(res.headers.get('x-total-count')) ?? 0
      return newResource(pokemons, total, page, perPage)
    }

    return pokemonResourceFallback
  })

  const { data: pokemonResource } = useSWR(url.toString(), fetcher, {
    fallbackData: pokemonResourceFallback,
  })

  return (
    <Card>
      <Card.Header>{dict.pokemons.title}</Card.Header>
      <Card.Body>
        <div className="mb-3 text-end">
          <Button variant="success" onClick={() => router.push('/pokemons/create')}>
            <FontAwesomeIcon icon={faPlus} fixedWidth />
            {dict.pokemons.add_new}
          </Button>
        </div>
        <Pagination meta={pokemonResource.meta} />
        <PokemonList pokemons={pokemonResource.data} />
        <Pagination meta={pokemonResource.meta} />
      </Card.Body>
    </Card>
  )
}
