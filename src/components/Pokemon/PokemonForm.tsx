'use client'

import {
  Alert, Button, Col, Form, Row,
} from 'react-bootstrap'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import {
  Pokemon,
  PokemonEggGroup,
  pokemonEggGroups,
  PokemonType,
  pokemonTypes,
} from '@/models/pokemon'
import FormError from '@/components/Form/FormError'
import PokemonTypeLabel from '@/components/Pokemon/PokemonTypeLabel'

type Inputs = {
  name: string;
  types: PokemonType[];
  eggGroups: PokemonEggGroup[];
  hp: number | null;
  attack: number | null;
  defense: number | null;
  special_attack: number | null;
  special_defense: number | null;
  speed: number | null;
}

type Props = {
  pokemon?: Pokemon;
}

export default function PokemonForm(props: Props) {
  const { pokemon } = props

  const defaultValues = (): Inputs => {
    if (pokemon) {
      return {
        name: pokemon.name,
        types: pokemon.types,
        eggGroups: pokemon.egg_groups,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        special_attack: pokemon.special_attack,
        special_defense: pokemon.special_defense,
        speed: pokemon.speed,
      }
    }

    return {
      name: '',
      types: [],
      eggGroups: [],
      hp: null,
      attack: null,
      defense: null,
      special_attack: null,
      special_defense: null,
      speed: null,
    }
  }

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: defaultValues(),
  })

  const [submitting, setSubmitting] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitting(true)

    // Change to your real submit here
    const fakeSubmit = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 1500)
    })

    const res = await fakeSubmit()

    setSubmitting(false)
    window.scrollTo(0, 0)

    if (res) {
      setNotificationMessage('Record saved successfully.')
      return
    }

    setNotificationMessage('Unexpected error occurred, please try again.')
  }

  return (
    <Form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Alert variant="success" show={notificationMessage !== ''} onClose={() => setNotificationMessage('')} dismissible>
        {notificationMessage}
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
          {...register('name', { required: 'This field is required' })}
          isInvalid={!!errors.name}
        />
        <FormError message={errors.name?.message} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Types</Form.Label>
        <div className={classNames({ 'is-invalid': !!errors.types })}>
          <Row>
            {pokemonTypes.map((type) => (
              <Col xs={6} sm={4} md={3} lg={2} key={type}>
                <Form.Check id={`type-${type}`}>
                  <Form.Check.Input
                    type="checkbox"
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register('types', { required: 'This field is required' })}
                    value={type}
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
        <FormError message={errors.types?.message} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Egg groups</Form.Label>
        <div className={classNames({ 'is-invalid': !!errors.eggGroups })}>
          <Row>
            {pokemonEggGroups.map((eggGroup) => (
              <Col xs={6} sm={4} md={3} lg={2} key={eggGroup}>
                <Form.Check
                  id={`eg-${eggGroup}`}
                  type="checkbox"
                  {...register('eggGroups', { required: 'This field is required' })}
                  value={eggGroup}
                  label={eggGroup}
                />
              </Col>
            ))}
          </Row>
        </div>
        <FormError message={errors.eggGroups?.message} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Hp</Form.Label>
        <Form.Control
          className="w-auto"
          type="number"
          {...register('hp', {
            required: 'This field is required',
            min: {
              value: 0,
              message: 'This input must be at least 0',
            },
            max: {
              value: 255,
              message: 'This input must be at most 255',
            },
            valueAsNumber: true,
          })}
          isInvalid={!!errors.hp}
        />
        <FormError message={errors.hp?.message} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Attack</Form.Label>
        <Form.Control
          className="w-auto"
          type="number"
          {...register('attack', {
            required: 'This field is required',
            min: {
              value: 0,
              message: 'This input must be at least 0',
            },
            max: {
              value: 255,
              message: 'This input must be at most 255',
            },
            valueAsNumber: true,
          })}
          isInvalid={!!errors.attack}
        />
        <FormError message={errors.attack?.message} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Defense</Form.Label>
        <Form.Control
          className="w-auto"
          type="number"
          {...register('defense', {
            required: 'This field is required',
            min: {
              value: 0,
              message: 'This input must be at least 0',
            },
            max: {
              value: 255,
              message: 'This input must be at most 255',
            },
            valueAsNumber: true,
          })}
          isInvalid={!!errors.defense}
        />
        <FormError message={errors.defense?.message} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Special attack</Form.Label>
        <Form.Control
          className="w-auto"
          type="number"
          {...register('special_attack', {
            required: 'This field is required',
            min: {
              value: 0,
              message: 'This input must be at least 0',
            },
            max: {
              value: 255,
              message: 'This input must be at most 255',
            },
            valueAsNumber: true,
          })}
          isInvalid={!!errors.special_attack}
        />
        <FormError message={errors.special_attack?.message} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Special defense</Form.Label>
        <Form.Control
          className="w-auto"
          type="number"
          {...register('special_defense', {
            required: 'This field is required',
            min: {
              value: 0,
              message: 'This input must be at least 0',
            },
            max: {
              value: 255,
              message: 'This input must be at most 255',
            },
            valueAsNumber: true,
          })}
          isInvalid={!!errors.special_defense}
        />
        <FormError message={errors.special_defense?.message} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Speed</Form.Label>
        <Controller
          control={control}
          name="speed"
          rules={{
            required: 'This field is required',
            min: {
              value: 0,
              message: 'This input must be at least 0',
            },
            max: {
              value: 255,
              message: 'This input must be at most 255',
            },
          }}
          render={({ field }) => (
            <Form.Control
              className="w-auto"
              type="number"
              {...field}
              isInvalid={!!errors.speed}
              value={field.value ?? ''}
              onChange={(e) => {
                if (e.target.value === '') {
                  setValue('speed', null)
                  return
                }
                setValue('speed', Number(e.target.value))
              }}
            />
          )}
        />
        <FormError message={errors.speed?.message} />
      </Form.Group>

      <Button className="me-3" type="submit" variant="success" disabled={submitting}>Submit</Button>
      <Button type="button" variant="secondary" onClick={() => reset()}>Reset</Button>
    </Form>
  )
}
