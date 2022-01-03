import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import {
  Container,
  HeaderNav,
  NavLink
} from './styles'

type ActiveLinkProps = 'all' | 't-shirts' | 'mugs'

export function HomeHeader() {
  const [ activeLink, setActiveLink ] = useState<ActiveLinkProps>('all')

  function handleSetActiveLink(linkTopic: ActiveLinkProps) {
    setActiveLink(linkTopic)
  }

  return (
    <Container>

      <HeaderNav>
        <NavLink 
          isActive={activeLink === 'all'}
          onClick={() => handleSetActiveLink('all')} 
          href='#'
        >
          All Products
        </NavLink>
        
        <NavLink 
          isActive={activeLink === 't-shirts'} 
          onClick={() => handleSetActiveLink('t-shirts')} 
          href='#'
        >
          T-shirts
        </NavLink>

        <NavLink 
          isActive={activeLink === 'mugs'} 
          onClick={() => handleSetActiveLink('mugs')} 
          href='#'
        >
          Mugs
        </NavLink>
      </HeaderNav>

      <button type='button'>
        Sort by

        <FiChevronDown size={'1.5rem'}  />
      </button>
    </Container>
  )
}