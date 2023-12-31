import React from 'react'
import Feedback from 'react-bootstrap/Feedback'

export default function FormError(props: { message?: string }) {
  const { message } = props

  return message && <Feedback type="invalid">{message}</Feedback>
}
