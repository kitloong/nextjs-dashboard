'use client'

import { useFormState, useFormStatus } from 'react-dom'
import {
  Alert, Button, Col, Form, Row,
} from 'react-bootstrap'
import React, { useEffect } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import {
  Pokemon,
  pokemonEggGroups,
  pokemonTypes,
} from '@/models/pokemon'
import FormError from '@/components/Form/FormError'
import PokemonTypeLabel from '@/components/Pokemon/PokemonTypeLabel'
import create from '@/app/(dashboard)/pokemons/create/action'

type Props = {
  pokemon?: Pokemon;
}

const SubmitButton = ({ validated, success }: { validated: boolean; success: boolean }) => {
  const { pending } = useFormStatus()

  useEffect(() => {
    if (validated) {
      window.scrollTo(0, 0)
    }
  }, [validated, pending])

  useEffect(() => {
    if (success) {
      // Reset form
    }
  }, [success, pending])

  return (
    <Button aria-disabled={pending} className="me-3" type="submit" variant="success">
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  )
}

export default function PokemonForm(props: Props) {
  const { pokemon } = props
  const [state, formAction] = useFormState(create, {
    success: false, validated: false, message: '', formKey: 0,
  })

  return (
    <Form noValidate key={state.formKey} action={formAction}>
      <Alert
        variant={state.success ? 'success' : 'danger'}
        show={state.errors === undefined && state.message !== ''}
      >
        {state.message}
      </Alert>

      {pokemon && (
        <div
          className="position-relative mx-auto"
          style={{
            width: '150px',
            height: '150px',
          }}
        >
          <Image
            fill
            style={{ objectFit: 'contain' }}
            alt={pokemon.pokemondb_identifier}
            sizes="5vw"
            src={`https://img.pokemondb.net/sprites/home/normal/2x/${pokemon.pokemondb_identifier}.jpg`}
          />
        </div>
      )}

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          defaultValue={pokemon?.name}
          isInvalid={!!state.errors?.name}
          required
        />
        <FormError messages={state.errors?.name} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Types</Form.Label>
        <div className={classNames({ 'is-invalid': !!state.errors?.types })}>
          <Row>
            {pokemonTypes.map((type) => (
              <Col xs={6} sm={4} md={3} lg={2} key={type}>
                <Form.Check id={`type-${type}`}>
                  <Form.Check.Input
                    type="checkbox"
                    name="types"
                    value={type}
                    defaultChecked={pokemon?.types.includes(type)}
                  />
                  <Form.Check.Label>
                    <span className="position-relative" style={{ top: '-.1rem' }}>
                      <PokemonTypeLabel type={type} />
                    </span>
                  </Form.Check.Label>
                </Form.Check>
              </Col>
            ))}
          </Row>
        </div>
        <FormError messages={state.errors?.types} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Egg groups</Form.Label>
        <div className={classNames({ 'is-invalid': !!state.errors?.eggGroups })}>
          <Row>
            {pokemonEggGroups.map((eggGroup) => (
              <Col xs={6} sm={4} md={3} lg={2} key={eggGroup}>
                <Form.Check
                  id={`eg-${eggGroup}`}
                  type="checkbox"
                  name="eggGroups"
                  value={eggGroup}
                  label={eggGroup}
                  defaultChecked={pokemon?.egg_groups.includes(eggGroup)}
                />
              </Col>
            ))}
          </Row>
        </div>
        <FormError messages={state.errors?.eggGroups} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Hp</Form.Label>
        <Form.Control
          className="w-auto"
          type="text"
          name="hp"
          required
          defaultValue={pokemon?.hp}
          isInvalid={!!state.errors?.hp}
        />
        <FormError messages={state.errors?.hp} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Attack</Form.Label>
        <Form.Control
          className="w-auto"
          type="number"
          name="attack"
          required
          defaultValue={pokemon?.attack}
          isInvalid={!!state.errors?.attack}
        />
        <FormError messages={state.errors?.attack} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Defense</Form.Label>
        <Form.Control
          className="w-auto"
          type="number"
          name="defense"
          required
          defaultValue={pokemon?.defense}
          isInvalid={!!state.errors?.defense}
        />
        <FormError messages={state.errors?.defense} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Special attack</Form.Label>
        <Form.Control
          className="w-auto"
          type="number"
          name="special_attack"
          required
          defaultValue={pokemon?.special_attack}
          isInvalid={!!state.errors?.special_attack}
        />
        <FormError messages={state.errors?.special_attack} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Special defense</Form.Label>
        <Form.Control
          className="w-auto"
          type="number"
          name="special_defense"
          required
          defaultValue={pokemon?.special_defense}
          isInvalid={!!state.errors?.special_defense}
        />
        <FormError messages={state.errors?.special_defense} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Speed</Form.Label>
        <Form.Control
          className="w-auto"
          type="number"
          name="speed"
          required
          defaultValue={pokemon?.speed}
          isInvalid={!!state.errors?.speed}
        />
        <FormError messages={state.errors?.speed} />
      </Form.Group>

      <SubmitButton validated={state.validated} success={state.success} />
      <Button type="reset" variant="secondary">Reset</Button>
    </Form>
  )
}
