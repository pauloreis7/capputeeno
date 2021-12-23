import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;

  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--white)
`

export const Content = styled.div`
  max-width: 70rem;

  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
  font-family: 'Saira Stencil One';
  font-size: 2.5rem;
  line-height: 150%;
  color: var(--gray-700)
`

export const ActionSection = styled.div`
  width: 37%;
  max-width: 25.75rem;

  display: flex;
  align-items: center;
  color: var(--gray-600);
`

export const Search = styled.label`
  width: 85.5%;
  max-width: 22rem;

  padding: 0.625rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--gray-100);
  border-radius: 8px;

  input {
    flex: 1;
    height: 100%;

    font-size: 0.875rem;
    line-height: 1.375rem;
    background: transparent;
    border: none;
  }
`

export const CartIcon = styled.div`
  max-height: 1.5rem;

  margin-left: 1.5rem;
  position: relative;

  span {
    width: 1.45rem;
    height: 1.45rem;

    padding-top: 0.1rem;
   
    background-color: var(--red-500);
    border-radius: 50%;
    color: var(--white);
    font-weight: 500;
    font-size: 0.625rem;
    line-height: 1.625rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: -12px;
    right: -12px;
  }
`
