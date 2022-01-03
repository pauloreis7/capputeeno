import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;

  padding: 2rem;
  margin-bottom: 2rem;
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

export const ActionSection = styled.div`
  width: 37%;
  max-width: 25.75rem;

  display: flex;
  align-items: center;
  color: var(--gray-600);
`
