import RowPerPageSelect from '@/components/Pagination/RowsPerPageSelect'

type Props = {
  perPage: number;
}

export default function RowsPerPage(props: Props) {
  const { perPage } = props

  return (
    <div className="col-auto ms-sm-auto mb-3">
      Rows per page:
      {' '}
      <RowPerPageSelect perPage={perPage} />
    </div>
  )
}
