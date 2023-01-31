import { Title } from '../components/atoms'
import { Header, SubHeaderStyled } from '../components/layout'
import { ITATable } from '../components/organisms'
import { urls } from '../constants'
import useFetch from '../hooks/useFetch'
import { colors, Container, FlexBox } from '../styles'

const columns = [
  {
    id: 'title',
    label: 'Nombre',
  },
  {
    id: 'type',
    label: 'Tipo',
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'district',
    label: 'Barrio',
  },
  {
    id: 'price',
    label: 'Precio',
  },
]

function Data() {
  const { data, loading } = useFetch(urls.houses)

  return (
    <FlexBox>
      <Header />
      <SubHeaderStyled>
        <Container>
          <Title order={2} color={colors.font.base}>
            Datos de las viviendas
          </Title>
        </Container>
      </SubHeaderStyled>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} loading={loading} />
      </Container>
    </FlexBox>
  )
}

export default Data
