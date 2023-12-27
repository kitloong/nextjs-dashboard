'use client'

import React, { PropsWithChildren, useEffect, useState } from 'react'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
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
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')

  const onClick = () => {
    if (setOrder) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    }

    if (setSort) {
      setSort(name)
    }

    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('sort', name)
    newSearchParams.set('order', order === 'asc' ? 'desc' : 'asc')

    router.push(`${pathname}?${newSearchParams}`)
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
