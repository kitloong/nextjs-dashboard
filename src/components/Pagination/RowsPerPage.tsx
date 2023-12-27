'use client'

import { Form } from 'react-bootstrap'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {
  perPage: number;
  setPerPage?: (perPage: number) => void;
}

export default function RowsPerPage(props: Props) {
  const { perPage, setPerPage } = props
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div className="col-auto ms-sm-auto mb-3">
      Rows per page:
      {' '}
      <Form.Select
        defaultValue={perPage}
        className="d-inline-block w-auto"
        aria-label="Item per page"
        onChange={(event) => {
          if (setPerPage) {
            setPerPage(parseInt(event.target.value, 10))
          }

          const newSearchParams = new URLSearchParams(searchParams)
          newSearchParams.set('page', '1') // Go back to first page
          newSearchParams.set('per_page', event.target.value)

          router.push(`${pathname}?${newSearchParams}`)
        }}
      >
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={250}>250</option>
      </Form.Select>
    </div>
  )
}
