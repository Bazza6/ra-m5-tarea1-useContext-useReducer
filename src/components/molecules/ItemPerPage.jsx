import styled from 'styled-components'
import { useContext } from 'react'
import { TableContext } from '../organisms/ITATable/store/context'
import { Actions } from '../organisms/ITATable/store/reducer'
import { Label, Select, Text } from '../atoms'
import { colors, FlexBox } from '../../styles'
// import { FlexBox } from '../../styles'

const StyledItemPerPage = styled(FlexBox)`
  align-items: flex-end;
  padding-right: 0.5rem;
`
const StyledSelect = styled(Select)`
  padding: 0px 10px;
  border-radius: 4px;
  border: 2px solid ${colors.font.base};
  color: ${colors.font.base};
`

function ItemPerPage() {
  const { dispatch } = useContext(TableContext)

  return (
    <StyledItemPerPage>
      <Label htmlFor="hola">
        <Text as="span" fontWeight="bold">
          Mostrar{' '}
        </Text>
        <StyledSelect
          id="hola"
          name="hola"
          onChange={(e) =>
            dispatch({
              type: Actions.SET_ITEM_PER_PAGE,
              payload: e.target.value,
            })
          }
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </StyledSelect>
      </Label>
    </StyledItemPerPage>
  )
}

export default ItemPerPage
