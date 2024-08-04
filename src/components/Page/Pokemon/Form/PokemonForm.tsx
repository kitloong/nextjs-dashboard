import Form from '@/components/Page/Pokemon/Form/Form'
import { Pokemon } from '@/models/pokemon'
import { Resource } from '@/models/resource'
import { Type } from '@/models/type'
import { getLocale } from '@/locales/dictionary'
import serverFetch from '@/utils/server-fetch'
import { EggGroup } from '@/models/egg-group'

type Props = {
  pokemon?: Pokemon;
}

const fetchTypes = async (): Promise<Resource<Type[]>> => {
  const locale = getLocale()

  const url = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}${locale}_types` || ''

  try {
    const res = await serverFetch(url, {
      method: 'GET',
    })

    if (!res.ok) {
      return {
        data: [],
      }
    }

    const types: Type[] = await res.json()

    return {
      data: types,
    }
  } catch (error) {
    return {
      data: [],
    }
  }
}

const fetchEggGroups = async (): Promise<Resource<EggGroup[]>> => {
  const locale = getLocale()

  const url = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}${locale}_egg_groups` || ''

  try {
    const res = await serverFetch(url, {
      method: 'GET',
    })

    if (!res.ok) {
      return {
        data: [],
      }
    }

    const eggGroups: EggGroup[] = await res.json()

    return {
      data: eggGroups,
    }
  } catch (error) {
    return {
      data: [],
    }
  }
}

export default async function PokemonForm(props: Props) {
  const [typesResponse, eggGroupsResponse] = await Promise.all([
    fetchTypes(), fetchEggGroups(),
  ])

  const { pokemon } = props
  const { data: types } = typesResponse
  const { data: eggGroups } = eggGroupsResponse

  return (
    <Form types={types} eggGroups={eggGroups} pokemon={pokemon} />
  )
}
