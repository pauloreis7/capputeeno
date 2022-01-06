import styled from "styled-components";

import { device } from '../../../styles/responsive'


export const Container = styled.div`
  font-family: 'Saira Stencil One';
  font-size: 1.5rem;
  line-height: 150%;
  color: var(--gray-700);

  @media ${device.tablet} { 
    font-size: 2rem;
  }

  @media ${device.laptop} { 
    font-size: 2.5rem;
  }
`
