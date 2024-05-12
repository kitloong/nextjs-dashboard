import React from 'react'
import useDictionary from '@/locales/dictionary-hook'

type Props = {
  total: number;
  from: number;
  to: number;
}

export default function Summary(props: Props) {
  const { total, from, to } = props

  const dict = useDictionary()

  return (
    <div className="col-12 text-center text-sm-start col-sm-auto col-lg mb-3">
      {dict.pagination.summary
        .replace('{{from}}', from.toString())
        .replace('{{to}}', to.toString())
        .replace('{{total}}', total.toString())}
    </div>
  )
}
