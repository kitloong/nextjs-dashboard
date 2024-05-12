'use client'

import React, { PropsWithChildren } from 'react'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  name: string;
} & PropsWithChildren

export default function THSort(props: Props) {
  const {
    name, children,
  } = props
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')

  const onClick = () => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('sort', name)
    newSearchParams.set('order', order === 'asc' ? 'desc' : 'asc')

    router.push(`${pathname}?${newSearchParams}`)
  }

  const getIcon = () => {
    if (sort !== name) {
      return faSort
    }

    if (order === 'asc') {
      return faSortUp
    }

    return faSortDown
  }

  return (
    <a className="text-decoration-none" role="button" tabIndex={0} onClick={onClick} onKeyDown={onClick}>
      {children}
      <FontAwesomeIcon icon={getIcon()} fixedWidth size="xs" />
    </a>
  )
}
