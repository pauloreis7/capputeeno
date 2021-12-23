import styled from "styled-components";

export const Container = styled.div`
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