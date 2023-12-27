import { Form } from 'react-bootstrap'
import React from 'react'

export default function FormError(props: { message?: string }) {
  const { message } = props

  return message && <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>
}
