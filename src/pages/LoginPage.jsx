import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import SectionImage from '../components/SectionImage';
import Heading from '../components/Heading';
import Text from '../components/Text';
import { FcGoogle } from "react-icons/fc";
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Section = styled.section`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 100vh;
`

const  Container = styled.form`
width: 35%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 4.5rem;
`

const Form = styled.div`
width: 80%;
display: flex;
flex-direction: column;
gap: 2.5rem;
align-items: left;
text-align: left;
`
const Actions = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
text-align: center;
margin-top: 3rem
`

const GoogleLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  color: black; 
  font-size: 1.3rem;
  background-color: white;
`;

const LoginButton = styled(Button)`
  background-color: rgba(47, 82, 205, 1);
  color: white; /* Adjust text color as needed */
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(47, 82, 205, 0.8); /* Slightly lighter on hover */
  }
`;


function LoginPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password)
      navigate("/reports")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Section >
      <Container onSubmit={loginWithEmailAndPassword}>
        <Heading for="normal">Login</Heading>
        <Form>
        <Text for="normal">Enter your account details</Text>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <Actions>
        <a href="#" className="forgot-password">Forgot password?</a>
        <LoginButton type="submit">Log in</LoginButton>
        <Text for="normal">or</Text>
        <GoogleLogin>
              <FcGoogle size={24} />
              <span>Continue with Google</span>
        </GoogleLogin>
          <Text for="normal">Don't have an account?     <Link to="/signup">Sign up</Link></Text>
        </Actions>
          </Form>
      </Container>
<SectionImage width='60%' src='/images/Road-sign-pana.png'/>
    </Section>
  );
};

export default LoginPage;