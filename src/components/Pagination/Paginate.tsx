import ReactPaginate from 'react-paginate'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

type Props = {
  currentPage: number;
  lastPage: number;
}

export default function Paginate(props: Props) {
  const { currentPage, lastPage } = props
  const [pageIndex, setPageIndex] = useState(currentPage - 1)
  const router = useRouter()

  useEffect(() => {
    setPageIndex(currentPage - 1)
  }, [currentPage])

  return (
    <div className="col-auto ms-sm-auto mb-3 overflow-auto">
      <ReactPaginate
        forcePage={pageIndex}
        pageCount={lastPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        containerClassName="pagination mb-0"
        previousClassName="page-item"
        pageClassName="page-item"
        breakClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLabel="‹"
        nextLabel="›"
        activeClassName="active"
        disabledClassName="disabled"
        onPageChange={(selectedItem) => {
          router.push({
            pathname: router.pathname,
            query: {
              ...router.query,
              page: selectedItem.selected + 1,
            },
          })
        }}
      />
    </div>
  )
}
