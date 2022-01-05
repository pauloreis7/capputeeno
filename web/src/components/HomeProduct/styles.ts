import styled from "styled-components"

export const Container = styled.div`
  max-width: 16rem;
  height: 23.625rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);

  border-radius: 0px 0px 4px 4px;


  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 4px 4px 0px 0px;
  }
`

export const ProductInfo = styled.div`
  width: 100%;
  height: 4.875rem;

  padding: 0.5rem 1rem;

  h4 {
    font-weight: 300;
    line-height: 150%;
    color: var(--gray-800);
    border-bottom: 1px solid var(--gray-200);

    margin-bottom: 0.25rem;
    padding-bottom: 0.5rem;
  }

  strong {
    font-size: 0.875rem;
    line-height: 150%;
    color: var(--gray-950);
  }
`