import { Container, Content } from '../styles/home'

import { HomeHeader } from '../components/HomeHeader'
import { HomeProducts } from '../components/HomeProducts'

export default function Home() {
  return (
    <Container>
      <Content>
        <HomeHeader />

        <HomeProducts />
      </Content>
    </Container>
  )
}