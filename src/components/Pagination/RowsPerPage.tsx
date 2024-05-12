import RowPerPageSelect from '@/components/Pagination/RowsPerPageSelect'
import useDictionary from '@/locales/dictionary-hook'

type Props = {
  perPage: number;
}

export default function RowsPerPage(props: Props) {
  const { perPage } = props

  const dict = useDictionary()

  return (
    <div className="col-auto ms-sm-auto mb-3">
      {dict.pagination.rows_per_page}
      :
      {' '}
      <RowPerPageSelect perPage={perPage} />
    </div>
  )
}
