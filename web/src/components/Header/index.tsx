import { Search } from './Search'
import { CartIcon } from './CartIcon'
import { Logo } from './Logo'

import {
  Container,
  Content,
  ActionSection,
} from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />

        <ActionSection>
          <Search />

          <CartIcon />
        </ActionSection>
      </Content>
    </Container>
  )
}