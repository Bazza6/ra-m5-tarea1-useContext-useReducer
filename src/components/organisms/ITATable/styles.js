import styled from 'styled-components'

export const TableCell = styled.td`
  border: 1px solid;
  padding: 0.8rem;
`

export const TableStyled = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  width: 100%;
`
export const ButtonStyled = styled.button`
  background-color: #32cd32;
  margin-left: 1rem;
  margin-bottom: 2rem;
  color: white;
  border-radius: 4px;
  border: 0;
  padding: 8px 24px;
  align-self: flex-end;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
  }
`