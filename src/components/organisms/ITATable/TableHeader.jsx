import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import { Actions } from './store/reducer'

function TableHeader() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, sortColumn } = state

  const handleClick = (id) => {
    dispatch({ type: Actions.SET_SORT_COLUMNS, payload: id })
  }

  // console.log(sortColumn)
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <TableCell
            style={{
              cursor: 'pointer',
            }}
            as="th"
            key={col.id}
            onClick={() => handleClick(col.id)}
          >
            <span style={{ color: sortColumn === col.id ? 'red' : 'black' }}>
              {col.label}
            </span>
          </TableCell>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
