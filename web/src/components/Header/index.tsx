import { FiSearch, FiShoppingBag } from 'react-icons/fi'

import {
  Container,
  Content,
  Logo,
  ActionSection,
  Search,
  CartIcon
} from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          capputeeno
        </Logo>

        <ActionSection>
          <Search>
            <input />

            <FiSearch />
          </Search>

          <CartIcon>
            <FiShoppingBag />

            <span>0</span>
          </CartIcon>
        </ActionSection>
      </Content>
    </Container>
  )
}