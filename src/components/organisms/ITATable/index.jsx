import { useEffect, useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { ButtonStyled, TableStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import 'react-loading-skeleton/dist/skeleton.css'
import DownloadTableButton from './DownloadTableButton'
import ItemPerPage from './ItemPerPage'
import Paging from './Paging'

const TableFooter = styled.div`
  display: flex;
  border-bottom: 1px solid;
  border-right: 1px solid;
  border-left: 1px solid;
  padding: 0.6rem;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

function Table({ columns, data, loading }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <div>
      {loading ? (
        <table style={{ marginTop: '60px' }}>
          <tr>
            {[1, 2, 3, 4, 5].map(() => (
              <td>
                <Skeleton style={{ margin: '2px' }} count={10} height="50px" />
              </td>
            ))}
          </tr>
        </table>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ButtonContainer>
            <ButtonStyled>viviendas</ButtonStyled>
            <ButtonStyled>por barrio</ButtonStyled>
            <DownloadTableButton />
          </ButtonContainer>
          <TableStyled>
            <TableHeader />
            <TableBody />
          </TableStyled>
          <TableFooter direction="row">
            <Paging />
            <ItemPerPage />
          </TableFooter>
        </div>
      )}
    </div>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}

export default ITATable
