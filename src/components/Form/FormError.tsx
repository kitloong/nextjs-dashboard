import React from 'react'
import Feedback from 'react-bootstrap/Feedback'

export default function FormError(props: { messages?: string[] }) {
  const { messages } = props

  return messages && <Feedback type="invalid">{messages.join(' ')}</Feedback>
}
