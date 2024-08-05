'use client'

import { useFormState, useFormStatus } from 'react-dom'
import {
  Alert,
  Button,
  Col,
  Form as BSForm,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap'
import React, { useEffect } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { Pokemon } from '@/models/pokemon'
import FormError from '@/components/Form/FormError'
import PokemonTypeLabel from '@/components/Page/Pokemon/PokemonTypeLabel'
import create from '@/app/(dashboard)/pokemons/create/action'
import useDictionary from '@/locales/dictionary-hook'
import { Type } from '@/models/type'
import { EggGroup } from '@/models/egg-group'
import FormCheckInput from 'react-bootstrap/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/FormCheckLabel'

type Props = {
  types: Type[];
  eggGroups: EggGroup[];
  pokemon?: Pokemon;
}

const SubmitButton = () => {
  const { pending } = useFormStatus()
  const dict = useDictionary()

  return (
    <Button disabled={pending} className="me-3" type="submit" variant="success">
      {pending ? dict.action.submitting : dict.action.submit}
    </Button>
  )
}

export default function Form(props: Props) {
  const {
    pokemon,
    types,
    eggGroups,
  } = props

  const dict = useDictionary()

  const [state, formAction] = useFormState(create, {
    success: false,
    scrollTop: false,
    message: '',
    formKey: 0,
  })

  useEffect(() => {
    if (state.scrollTop) {
      window.scrollTo(0, 0)
    }
  }, [state])

  return (
    <BSForm noValidate key={state.formKey} action={formAction}>
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

      <FormGroup className="mb-3">
        <FormLabel>{dict.pokemons.attribute.name}</FormLabel>
        <FormControl
          type="text"
          name="name"
          defaultValue={pokemon?.name}
          isInvalid={!!state.errors?.name}
          required
        />
        <FormError messages={state.errors?.name} />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>{dict.pokemons.attribute.type}</FormLabel>
        <div className={classNames({ 'is-invalid': !!state.errors?.types })}>
          <Row>
            {types.map((type) => (
              <Col xs={6} sm={4} md={3} lg={2} key={type.id}>
                <FormCheck id={`type-${type.id}`}>
                  <FormCheckInput
                    type="checkbox"
                    name="types"
                    value={type.id}
                    defaultChecked={pokemon?.types.some((t) => t.id)}
                  />
                  <FormCheckLabel>
                    <span className="position-relative" style={{ top: '-.1rem' }}>
                      <PokemonTypeLabel type={type} />
                    </span>
                  </FormCheckLabel>
                </FormCheck>
              </Col>
            ))}
          </Row>
        </div>
        <FormError messages={state.errors?.types} />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>{dict.pokemons.attribute.egg_group}</FormLabel>
        <div className={classNames({ 'is-invalid': !!state.errors?.eggGroups })}>
          <Row>
            {eggGroups.map((eggGroup) => (
              <Col xs={6} sm={4} md={3} lg={2} key={eggGroup.id}>
                <FormCheck
                  id={`eg-${eggGroup.id}`}
                  type="checkbox"
                  name="eggGroups"
                  value={eggGroup.id}
                  label={eggGroup.name}
                  defaultChecked={pokemon?.egg_groups.some((eg) => eg.id === eggGroup.id)}
                />
              </Col>
            ))}
          </Row>
        </div>
        <FormError messages={state.errors?.eggGroups} />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>{dict.pokemons.attribute.hp}</FormLabel>
        <FormControl
          className="w-auto"
          type="text"
          name="hp"
          required
          defaultValue={pokemon?.hp}
          isInvalid={!!state.errors?.hp}
        />
        <FormError messages={state.errors?.hp} />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>{dict.pokemons.attribute.attack}</FormLabel>
        <FormControl
          className="w-auto"
          type="number"
          name="attack"
          required
          defaultValue={pokemon?.attack}
          isInvalid={!!state.errors?.attack}
        />
        <FormError messages={state.errors?.attack} />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>{dict.pokemons.attribute.defense}</FormLabel>
        <FormControl
          className="w-auto"
          type="number"
          name="defense"
          required
          defaultValue={pokemon?.defense}
          isInvalid={!!state.errors?.defense}
        />
        <FormError messages={state.errors?.defense} />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>{dict.pokemons.attribute.sp_attack}</FormLabel>
        <FormControl
          className="w-auto"
          type="number"
          name="special_attack"
          required
          defaultValue={pokemon?.special_attack}
          isInvalid={!!state.errors?.special_attack}
        />
        <FormError messages={state.errors?.special_attack} />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>{dict.pokemons.attribute.sp_defense}</FormLabel>
        <FormControl
          className="w-auto"
          type="number"
          name="special_defense"
          required
          defaultValue={pokemon?.special_defense}
          isInvalid={!!state.errors?.special_defense}
        />
        <FormError messages={state.errors?.special_defense} />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>{dict.pokemons.attribute.speed}</FormLabel>
        <FormControl
          className="w-auto"
          type="number"
          name="speed"
          required
          defaultValue={pokemon?.speed}
          isInvalid={!!state.errors?.speed}
        />
        <FormError messages={state.errors?.speed} />
      </FormGroup>

      <SubmitButton />
      <Button type="reset" variant="secondary">{dict.action.reset}</Button>
    </BSForm>
  )
}
