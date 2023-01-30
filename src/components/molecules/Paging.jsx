// import SelectGroup from './SelectGroup'
import { useContext } from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Icon, Text } from '../atoms'
import { TableContext } from '../organisms/ITATable/store/context'
import { Actions } from '../organisms/ITATable/store/reducer'

function Paging() {
  const { state, dispatch } = useContext(TableContext)
  const { actualPage, itemPerPage, data } = state
  const dataLength = data.length
  const totalPage = Math.ceil(dataLength / itemPerPage)

  const buttonLeftDisabled = actualPage === 1
  const buttonRightDisabled = actualPage === totalPage

  const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
  `

  return (
    <FlexBox direction="row" align="center">
      <ButtonStyled
        style={{ color: !buttonLeftDisabled && colors.blue }}
        disabled={buttonLeftDisabled}
        type="button"
        onClick={() => dispatch({ type: Actions.SET_ACTUAL_PAGE, payload: -1 })}
      >
        <Icon icon="arrow_back_ios" wght="800" />
      </ButtonStyled>
      <Text as="span" fontWeight="bold">
        Página {actualPage} de {totalPage}
      </Text>
      <ButtonStyled
        style={{ color: !buttonRightDisabled && colors.blue }}
        disabled={buttonRightDisabled}
        type="button"
        onClick={() => dispatch({ type: Actions.SET_ACTUAL_PAGE, payload: 1 })}
      >
        <Icon icon="arrow_forward_ios" wght="800" />
      </ButtonStyled>
    </FlexBox>
  )
}

export default Paging
