import styled from "styled-components";

const Btn = styled.button`
padding: 1rem 1.5rem;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.4rem;
background-color: #2F52CD;
border: 1px solid #fff;
gap: 1rem;
border-radius: 8px
`

function Button({children}){
  return <Btn>{children}</Btn>
}

export default Button