import React, { useContext } from 'react'
import { FlexBox } from '../../../styles'
import { Icon } from '../../atoms'
import { TableContext } from './store/context'
import { ButtonStyled } from './styles'

function DownloadTableButton() {
  const { state } = useContext(TableContext)
  const { data, columns } = state

  const handleDownload = () => {
    const header = columns.map((col) => col.label).join(',')
    const body = data
      .map((d) => columns.map((col) => d[col.id]).join(','))
      .join('\n')
    const csv = `${header}\n${body}`
    const blob = new Blob([csv], { type: 'text/csv' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'tabla.csv'
    link.click()
  }

  return (
    <ButtonStyled type="button" onClick={handleDownload}>
      <FlexBox direction="row">
        <Icon icon="download" />
        Descargar
      </FlexBox>
    </ButtonStyled>
  )
}

export default DownloadTableButton
