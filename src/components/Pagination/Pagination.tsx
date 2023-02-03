import React from 'react'
import { Resource } from '@models/resource'
import Summary from './Summary'
import RowsPerPage from './RowsPerPage'
import Paginate from './Paginate'

type Props = {
  meta: Resource<unknown>['meta'];
  setPerPage?: (perPage: number) => void;
} & Pick<Parameters<typeof Paginate>[0], 'setPage'>
& Pick<Parameters<typeof RowsPerPage>[0], 'setPerPage'>

export default function Pagination(props: Props) {
  const {
    meta: {
      from, to, total, per_page: perPage, last_page: lastPage, current_page: currentPage,
    },
    setPerPage,
    setPage,
  } = props

  return (
    <div className="row align-items-center justify-content-center">
      <Summary from={from} to={to} total={total} />
      <RowsPerPage perPage={perPage} setPerPage={setPerPage} />
      <Paginate currentPage={currentPage} lastPage={lastPage} setPage={setPage} />
    </div>
  )
}
