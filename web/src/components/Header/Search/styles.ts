import styled from "styled-components";

import { device, size } from '../../../styles/responsive'

export const Container = styled.label`
  width: 85.5%;
  max-width: 22rem;

  padding: 0.625rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--gray-100);
  border-radius: 8px;

  @media (max-width: ${size.mobileL}) { 
    display: none;
  }

  @media ${device.tablet} { 
    width: 75.5%;
    max-width: 18rem;
  }

  input {
    flex: 1;
    height: 100%;

    font-size: 0.875rem;
    line-height: 1.375rem;
    background: transparent;
    border: none;
  }

  svg {
    width: 24px;
    height: 24px;

    @media (max-width: ${size.tablet}) { 
      display: none;
    }
  }
`