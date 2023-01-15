import { Dropdown, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsisVertical, faSort, faSortDown, faSortUp,
} from '@fortawesome/free-solid-svg-icons'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Pokemon } from '@models/pokemon'
import { ImageFallback } from '@components/Image'

const typeColorMap: Record<string, string> = {
  normal: '#aa9',
  fighting: '#b54',
  flying: '#89f',
  poison: '#a59',
  ground: '#db5',
  rock: '#ba6',
  bug: '#ab2',
  ghost: '#66b',
  steel: '#aab',
  fire: '#f42',
  water: '#39f',
  grass: '#7c5',
  electric: '#fc3',
  psychic: '#f59',
  ice: '#6cf',
  dragon: '#76e',
  dark: '#754',
  fairy: '#e9e',
  unknown: '#aa9',
  shadow: '#aa9',
}

type TypeLabelProps = {
  type: string;
}

const TypeLabel = ({ type }: TypeLabelProps) => (
  <span
    className="text-white d-inline-block text-uppercase text-center rounded-1 shadow-sm me-2"
    style={{
      backgroundColor: typeColorMap[type],
      textShadow: '1px 1px 2px rgb(0 0 0 / 70%)',
      fontSize: '.7rem',
      width: '70px',
    }}
  >
    {type}
  </span>
)

type THSortProps = {
  name: string;
} & PropsWithChildren

const THSort = (props: THSortProps) => {
  const {
    name, children,
  } = props
  const [icon, setIcon] = useState(faSort)
  const router = useRouter()
  const { query: { sort, order } } = router

  const onClick = () => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        sort: name,
        order: order === 'asc' ? 'desc' : 'asc',
      },
    })
  }

  useEffect(() => {
    if (sort !== name) {
      setIcon(faSort)
      return
    }

    if (order === 'asc') {
      setIcon(faSortUp)
      return
    }

    if (order === 'desc') {
      setIcon(faSortDown)
    }
  }, [sort, order, name])

  return (
    <a className="text-decoration-none" role="button" tabIndex={0} onClick={onClick} onKeyDown={onClick}>
      {children}
      <FontAwesomeIcon icon={icon} fixedWidth size="xs" />
    </a>
  )
}

type Props = {
  pokemons: Pokemon[];
}

export default function PokemonList(props: Props) {
  const { pokemons } = props

  return (
    <Table responsive bordered hover>
      <thead className="bg-light">
        <tr>
          <th><THSort name="id">#</THSort></th>
          <th aria-label="Photo" />
          <th><THSort name="name">Name</THSort></th>
          <th>Type</th>
          <th className="text-center">Egg group</th>
          <th className="text-end"><THSort name="hp">Hp</THSort></th>
          <th className="text-end"><THSort name="attack">Atk</THSort></th>
          <th className="text-end"><THSort name="defense">Def</THSort></th>
          <th className="text-end"><THSort name="special_attack">SpA</THSort></th>
          <th className="text-end"><THSort name="special_defense">SpD</THSort></th>
          <th className="text-end"><THSort name="speed">Spd</THSort></th>
          <th className="text-end"><THSort name="total">Total</THSort></th>
          <th aria-label="Action" />
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon) => (
          <tr key={pokemon.id}>
            <td>{pokemon.id}</td>
            <td>
              <div className="position-relative mx-auto" style={{ width: '70px', height: '70px' }}>
                <ImageFallback
                  fill
                  style={{ objectFit: 'contain' }}
                  alt={pokemon.identifier}
                  src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.identifier}.gif`}
                  fallbackSrc={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokemon.identifier}.png`}
                />
              </div>
            </td>
            <td>{pokemon.name}</td>
            <td>
              {pokemon.types.map((type) => <TypeLabel key={type} type={type} />)}
            </td>
            <td className="text-center" style={{ whiteSpace: 'pre' }}>{pokemon.egg_groups.join('\n')}</td>
            <td className="text-end">{pokemon.hp}</td>
            <td className="text-end">{pokemon.attack}</td>
            <td className="text-end">{pokemon.defense}</td>
            <td className="text-end">{pokemon.special_attack}</td>
            <td className="text-end">{pokemon.special_defense}</td>
            <td className="text-end">{pokemon.speed}</td>
            <td className="text-end">{pokemon.total}</td>
            <td>
              <Dropdown align="end">
                <Dropdown.Toggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-black-50 shadow-none p-0"
                  id={`action-${pokemon.id}`}
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                  <Dropdown.Item
                    className="text-danger"
                    href="#/action-3"
                  >
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
