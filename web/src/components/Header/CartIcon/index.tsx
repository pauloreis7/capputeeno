import { FiShoppingBag } from 'react-icons/fi'

import { Container } from './styles'

export function CartIcon() {
  return (
    <Container>
      <FiShoppingBag size={'1.5rem'}  />

      <span>2</span>
    </Container>
  )
}