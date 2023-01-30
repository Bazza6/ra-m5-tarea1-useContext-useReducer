import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { actualPage, itemPerPage, data, columns } = state

  const firstValue = (actualPage - 1) * itemPerPage // esto no deberia cambiar cuando se cambia el numero de elementos por pagina
  const secondValue = Number(firstValue) + Number(itemPerPage)

  return (
    <tbody>
      {data.slice(firstValue, secondValue).map((d) => (
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
