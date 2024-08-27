import styled, { css } from "styled-components";

const Text = styled.p`
  ${(props) =>
    props.for === 'card' &&
    css`
      font-size: 2rem;
    `}
  
  ${(props) =>
    props.for === 'normal' &&
    css`
      font-size: 1.5rem;
    `}
`;

export default Text;
