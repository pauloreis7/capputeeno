import styled from 'styled-components'

export const Container = styled.header`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: var(--gray-200);
    line-height: 22px;
    color: var(--gray-600);
    border: none;
    transition: filter 0.2s;

    display: flex;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    border-radius: 8px;

    svg {
      margin-left: 0.75rem;
    }

    &:hover {
      filter: brightness(0.95);
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

  a {
    color: var(--gray-800);
    font-weight: 600;
    line-height: 1.375rem;
    font-size: 1.125rem;

    border-bottom: 4px solid var(--orange-200);
  }
`