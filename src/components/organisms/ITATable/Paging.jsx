// import SelectGroup from './SelectGroup'
import { useContext } from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../../styles'
import { Icon, Text } from '../../atoms'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'

function Paging() {
  const { state, dispatch } = useContext(TableContext)
  console.log('state:::', state)

  const { actualPage, itemPerPage, data } = state
  if (!data) return null
  const totalPage = Math.ceil(data.length / itemPerPage)

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
