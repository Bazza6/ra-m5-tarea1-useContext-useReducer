import { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../../styles'
import { DownloadTableButton, ItemPerPage, Paging } from '../../molecules'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

const TableFooter = styled(FlexBox)`
  border-bottom: 1px solid;
  border-right: 1px solid;
  border-left: 1px solid;
  padding: 0.6rem;
`

function Table({ columns, data, showHeader = true }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <TableStyled>
      {showHeader && <TableHeader />}
      <TableBody />
    </TableStyled>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <DownloadTableButton />

      <Table {...props} />
      <TableFooter direction="row">
        <Paging />
        <ItemPerPage />
      </TableFooter>
    </TableProvider>
  )
}

export default ITATable
