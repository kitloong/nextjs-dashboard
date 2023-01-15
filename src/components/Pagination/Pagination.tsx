import React from 'react'
import { Resource } from '@models/resource'
import Summary from './Summary'
import RowsPerPage from './RowsPerPage'
import Paginate from './Paginate'

type Props = {
  meta: Resource<unknown>['meta'];
}

export default function Pagination(props: Props) {
  const {
    meta: {
      from, to, total, per_page: perPage, last_page: lastPage, current_page: currentPage,
    },
  } = props

  return (
    <div className="row align-items-center justify-content-center">
      <Summary from={from} to={to} total={total} />
      <RowsPerPage perPage={perPage} />
      <Paginate currentPage={currentPage} lastPage={lastPage} />
    </div>
  )
}
