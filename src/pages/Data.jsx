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
  const { data, loading, error, isSuccess, hasData } = useFetch(urls.houses)

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
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
        {!hasData && <div>No hay datos</div>}
        {isSuccess && <ITATable columns={columns} data={data} />}
      </Container>
    </FlexBox>
  )
}

export default Data
