import styled, { css } from 'styled-components';


const Contain = styled.section`
  
  ${({ isVisible }) => isVisible && css `
  opacity: 1;  
  pointer-events: auto;
  `}

`;

export default Contain