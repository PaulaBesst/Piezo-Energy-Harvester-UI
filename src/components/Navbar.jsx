import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
background-color: transparent;
`

const Logo = styled.div`
font-size: 3rem;
font-weight: bold;
color: rgba(47, 82, 205, 0.65);
`

const Btn = styled.div`
display: flex;
gap: 10px;
`

const Link = styled(NavLink)`
&:link,
&:visited {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: #eee;
  border-radius: 6px;
  color: #000;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);

  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2rem;
  transition: all 0.3s;
  text-decoration: none;

  
  
  ${(props) =>
    props.for === "signup" &&
    css`
    color: #fff;
    background-color: rgba(47, 82, 205, 0.65);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2rem;
    transition: all 0.3s;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    border-radius: 5px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);
    `}

  }
`

function Navbar(){
  return (
    <Nav className="navbar">
      <Logo className="navbar-logo">The Piezo Project</Logo>
      <Btn className="navbar-buttons">
        <Link to="/login">Login</Link>
        <Link for="signup" to="/signup">Sign Up</Link>
      </Btn>
    </Nav>
  );
};

export default Navbar;