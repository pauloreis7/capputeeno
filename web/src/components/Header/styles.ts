import styled from "styled-components";

import { device, size } from '../../styles/responsive'

export const Container = styled.header`
  width: 100%;
  height: 5rem;

  padding: 2rem;
  margin-bottom: 2rem;

  background-color: var(--white)
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActionSection = styled.div`
  width: 100%;
  max-width: 16rem;

  display: flex;
  align-items: center;
  color: var(--gray-600);

  @media (max-width: ${size.mobileL}) { 
    max-width: 4rem;
  }

  @media ${device.tablet} { 
    max-width: 18.5rem;
  }

  @media ${device.laptop} { 
    max-width: 20rem;
  }
`
