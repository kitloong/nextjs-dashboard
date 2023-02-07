import ReactPaginate from 'react-paginate'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

type Props = {
  currentPage: number;
  lastPage: number;
  setPage?: (page: number) => void;
}

export default function Paginate(props: Props) {
  const { currentPage, lastPage, setPage } = props
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
          const page = selectedItem.selected + 1

          if (setPage) {
            setPage(page)
          }

          router.push({
            pathname: router.pathname,
            query: {
              ...router.query,
              page,
            },
          })
        }}
      />
    </div>
  )
}
