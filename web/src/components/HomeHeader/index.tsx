import { FiChevronDown } from 'react-icons/fi'

import {
  Container,
  HeaderNav
} from './styles'

export function HomeHeader() {
  return (
    <Container>

      <HeaderNav>
        <a href='#'>Todos os produtos</a>
        <a href='#'>Camisetas</a>
        <a href='#'>Canecas</a>
      </HeaderNav>

      <button type='button'>
        Sort by

        <FiChevronDown size={'1.5rem'}  />
      </button>
    </Container>
  )
}