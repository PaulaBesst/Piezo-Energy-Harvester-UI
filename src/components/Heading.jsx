import styled, { css } from "styled-components";

const Heading = styled.h1`
    ${(props)=>props.for === 'card_title' && css`
    font-size: 1.5rem;
    `}

    ${(props)=>props.for === 'landing_page' && css`
    font-size: 4.5rem;
    color: rgba(47, 82, 205, 0.65);
   font-weight: 800;
    `}

    ${(props)=>props.for === 'normal' && css`
    font-size: 3rem;
   font-weight: 600;
    `}

    ${(props)=>props.for === 'auth' && css`
    font-size: 5rem;
   font-weight: 900;
    `}
`

export default Heading;