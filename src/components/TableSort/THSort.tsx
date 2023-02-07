import React, { PropsWithChildren, useEffect, useState } from 'react'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  name: string;
  setSort?: (sort: string) => void;
  setOrder?: (order: string) => void;
} & PropsWithChildren

export default function THSort(props: Props) {
  const {
    name, children, setSort, setOrder,
  } = props
  const [icon, setIcon] = useState(faSort)
  const router = useRouter()
  const { query: { sort, order } } = router

  const onClick = () => {
    if (setOrder) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    }

    if (setSort) {
      setSort(name)
    }

    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        sort: name,
        order: order === 'asc' ? 'desc' : 'asc',
      },
    })
  }

  useEffect(() => {
    if (sort !== name) {
      setIcon(faSort)
      return
    }

    if (order === 'asc') {
      setIcon(faSortUp)
      return
    }

    if (order === 'desc') {
      setIcon(faSortDown)
    }
  }, [sort, order, name])

  return (
    <a className="text-decoration-none" role="button" tabIndex={0} onClick={onClick} onKeyDown={onClick}>
      {children}
      <FontAwesomeIcon icon={icon} fixedWidth size="xs" />
    </a>
  )
}
