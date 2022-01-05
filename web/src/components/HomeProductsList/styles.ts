import styled from "styled-components";

import { device } from '../../styles/responsive'

export const Container = styled.section`
  width: 100%;
  margin-top: 2.25rem;

  display: grid;
  gap: 2rem;

  @media ${device.mobileM} { 
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.mobileL} { 
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} { 
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptop} { 
    grid-template-columns: repeat(4, 1fr);
  }
`