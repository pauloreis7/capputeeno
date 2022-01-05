import { Container, Content } from '../styles/home'

import { HomeHeader } from '../components/HomeHeader'
import { HomeProductsList } from '../components/HomeProductsList'

export default function Home() {
  return (
    <Container>
      <Content>
        <HomeHeader />

        <HomeProductsList />
      </Content>
    </Container>
  )
}