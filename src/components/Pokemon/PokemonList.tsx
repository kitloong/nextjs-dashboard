import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Pokemon } from '@/models/pokemon'
import THSort from '@/components/TableSort/THSort'
import PokemonTypeLabel from '@/components/Pokemon/PokemonTypeLabel'

type Props = {
  pokemons: Pokemon[];
} & Pick<Parameters<typeof THSort>[0], 'setSort' | 'setOrder'>

export default function PokemonList(props: Props) {
  const { pokemons, setSort, setOrder } = props

  return (
    <Table responsive bordered hover>
      <thead className="bg-light">
        <tr>
          <th><THSort name="id" setSort={setSort} setOrder={setOrder}>#</THSort></th>
          <th aria-label="Photo" />
          <th><THSort name="name" setSort={setSort} setOrder={setOrder}>Name</THSort></th>
          <th>Type</th>
          <th className="text-center">Egg group</th>
          <th className="text-end"><THSort name="hp" setSort={setSort} setOrder={setOrder}>Hp</THSort></th>
          <th className="text-end"><THSort name="attack" setSort={setSort} setOrder={setOrder}>Atk</THSort></th>
          <th className="text-end"><THSort name="defense" setSort={setSort} setOrder={setOrder}>Def</THSort></th>
          <th className="text-end"><THSort name="special_attack" setSort={setSort} setOrder={setOrder}>SpA</THSort></th>
          <th className="text-end"><THSort name="special_defense" setSort={setSort} setOrder={setOrder}>SpD</THSort></th>
          <th className="text-end"><THSort name="speed" setSort={setSort} setOrder={setOrder}>Spd</THSort></th>
          <th className="text-end"><THSort name="total" setSort={setSort} setOrder={setOrder}>Total</THSort></th>
          <th aria-label="Action" />
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon) => (
          <tr key={pokemon.id}>
            <td>{pokemon.id}</td>
            <td>
              <div className="position-relative mx-auto" style={{ width: '70px', height: '70px' }}>
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  alt={pokemon.pokemondb_identifier}
                  sizes="5vw"
                  src={`https://img.pokemondb.net/sprites/home/normal/2x/${pokemon.pokemondb_identifier}.jpg`}
                />
              </div>
            </td>
            <td>{pokemon.name}</td>
            <td>
              {pokemon.types.map((type) => <span key={type} className="me-2"><PokemonTypeLabel type={type} /></span>)}
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
                <DropdownToggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-black-50 shadow-none p-0"
                  id={`action-${pokemon.id}`}
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem href="#/action-1">Info</DropdownItem>
                  <Link href={`pokemons/${pokemon.id}/edit`} passHref legacyBehavior>
                    <DropdownItem>Edit</DropdownItem>
                  </Link>
                  <DropdownItem
                    className="text-danger"
                    href="#/action-3"
                  >
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
