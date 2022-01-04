import styled, { css } from 'styled-components'

interface NavLinkProps {
  isActive: boolean
}

interface HeaderDropListProps {
  isActive: boolean
}

export const Container = styled.header`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    position: relative;
    width: 11rem;

    background: transparent;
    line-height: 22px;
    color: var(--gray-600);
    border: none;

    span {
      width: 11rem;
      padding: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: right;
      border-radius: 8px;
      background: var(--gray-200);
      transition: filter 0.2s;

      svg {
        margin-left: 0.75rem;
      }

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
`

export const HeaderNav = styled.nav`
  width: 100%;
  max-width: 25.625rem;

  list-style: none;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLink = styled.a<NavLinkProps>`
  color: var(--gray-600);
  line-height: 1.375rem;
  font-size: 1.125rem;
  transition: filter 0.3s;

  &:hover {
    color: var(--gray-800);
  }

  ${props => 
    props.isActive && 
    css`
      color: var(--gray-800);
      font-weight: 600;
      border-bottom: 4px solid var(--orange-200);
    `
  }
`

export const HeaderDropList = styled.div<HeaderDropListProps>`
  position: absolute;
  left: 0;
  bottom: -8.25rem;

  width: 100%;
  
  background: var(--white);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  ${props => 
    !props.isActive && 
    css`
      display: none;
    `
  }

  button {
    width: 100%;
    padding: 0.3rem 1rem;
    text-align: left;

    color: var(--gray-600);
    font-size: 0.875rem;
    line-height: 1.375rem;    
    border: none;
    background: var(--white);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    } 
  }

  button:first-child {
    padding-top: 0.5rem;
  }

  button:last-child {
    padding-bottom: 0.5rem;
  }
`