import { GetServerSideProps, NextPage } from 'next'
import { AdminLayout } from '@layout'
import {
  Card, Dropdown, Table, Form,
} from 'react-bootstrap'
import axios from 'axios'
import { Pokemon } from '@models/pokemon'
import { ResourceList } from '@models/resource-list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsisVertical, faSort, faSortDown, faSortUp,
} from '@fortawesome/free-solid-svg-icons'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { ImageFallback } from '@components'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'

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

type PaginationProps = {
  meta: ResourceList<Pokemon>['meta'];
}

const Pagination = (props: PaginationProps) => {
  const {
    meta: {
      from, to, total, per_page: perPage, last_page: lastPage, current_page: currentPage,
    },
  } = props

  const [pageIndex, setPageIndex] = useState(currentPage - 1)
  const router = useRouter()

  useEffect(() => {
    setPageIndex(currentPage - 1)
  }, [currentPage])

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 text-center text-sm-start col-sm-auto col-lg mb-3">
        Showing
        {' '}
        <span className="fw-semibold">{from}</span>
        {' '}
        to
        {' '}
        <span className="fw-semibold">{to}</span>
        {' '}
        of
        {' '}
        <span className="fw-semibold">{total}</span>
        {' '}
        results
      </div>
      <div className="col-auto ms-sm-auto mb-3">
        Rows per page:
        {' '}
        <Form.Select
          value={perPage}
          defaultValue={20}
          className="d-inline-block w-auto"
          aria-label="Item per page"
          onChange={(event) => {
            router.push({
              pathname: router.pathname,
              query: {
                ...router.query,
                page: 1, // Go back to first page
                per_page: event.target.value,
              },
            })
          }}
        >
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={250}>250</option>
        </Form.Select>
      </div>
      <div className="col-auto ms-sm-auto mb-3 overflow-auto">
        <ReactPaginate
          forcePage={pageIndex}
          pageCount={lastPage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          containerClassName="pagination mb-0"
          previousClassName="page-item"
          pageClassName="page-item"
          breakClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          pageLinkClassName="page-link"
          breakLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLabel="‹"
          nextLabel="›"
          activeClassName="active"
          disabledClassName="disabled"
          onPageChange={(selectedItem) => {
            router.push({
              pathname: router.pathname,
              query: {
                ...router.query,
                page: selectedItem.selected + 1,
              },
            })
          }}
        />
      </div>
    </div>
  )
}

type Props = {
  pokemonResourceList: ResourceList<Pokemon>;
}

const Pokemons: NextPage<Props> = (props) => {
  const {
    pokemonResourceList: {
      data: pokemons, meta,
    },
  } = props

  return (
    <AdminLayout>
      <Card>
        <Card.Header>Pokémon</Card.Header>
        <Card.Body>
          <Pagination meta={meta} />
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
                        layout="fill"
                        objectFit="contain"
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

  const total = parseInt(headers['x-total-count'], 10)
  const pokemonResourceList: ResourceList<Pokemon> = {
    data: pokemons,
    meta: {
      current_page: page,
      last_page: Math.ceil(total / perPage),
      from: page === 1 ? 1 : (page - 1) * perPage + 1,
      to: page === 1 ? perPage : (page - 1) * perPage + perPage,
      per_page: perPage,
      total,
    },
  }

  return {
    props: {
      pokemonResourceList,
    }, // will be passed to the page component as props
  }
}

export default Pokemons
