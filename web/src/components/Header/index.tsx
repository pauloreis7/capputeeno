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
            <input 
              placeholder='Looking for something specific?'
            />

            <FiSearch size={'1.5rem'} />
          </Search>

          <CartIcon>
            <FiShoppingBag size={'1.5rem'}  />


            <span>2</span>
          </CartIcon>
        </ActionSection>
      </Content>
    </Container>
  )
}