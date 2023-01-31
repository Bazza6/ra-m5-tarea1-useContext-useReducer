import React, { useContext, useState } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { actualPage, itemPerPage, data, columns, sortColumn } = state
  if (!data) return null

  const firstValue = (actualPage - 1) * itemPerPage
  const secondValue = Number(firstValue) + Number(itemPerPage)

  const sortData = [...data].sort((a, b) =>
    a[sortColumn] > b[sortColumn] ? 1 : -1,
  )

  return (
    <tbody>
      {sortData.slice(firstValue, secondValue).map((d) => (
        <tr key={d.id}>
          {columns
            .filter((col) => !col.isHidden)
            .map((col) => (
              <TableCell key={`${d.id}-${col.id}`}>
                {col.cell ? col.cell(d) : d[col.id]}
              </TableCell>
            ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
