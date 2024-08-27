import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import styled from 'styled-components';
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import InputField from '../components/InputField';
import Button from '../components/Button';
import SectionImage from '../components/SectionImage';
import Heading from '../components/Heading';
import Text from '../components/Text';

const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Container = styled.form`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4.5rem;
`;

const Form = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: left;
  text-align: left;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  margin-top: 2rem;
`;

const GoogleLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  color: black; 
  font-size: 1.3rem;
  background-color: white;
  border: 1px solid black;
  padding: 0.5rem 1rem;
`;

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const signupWithUsernameAndPassword = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/reports");
      } catch (error) {
        alert("Sorry, something went wrong. Please try again.");
        console.error("Signup error", error);
      }
    } else {
      alert("Passwords don't match. Please try again.");
    }
  };

  const signupWithGoogle = async () => {
    try {
      console.log("Google Sign-In button clicked"); // Debugging
      await signInWithPopup(auth, googleProvider);
      console.log("Google Sign-In successful"); // Debugging
      navigate("/reports");
    } catch (error) {
      alert("Sorry, something went wrong with Google sign-in. Please try again.");
      console.error("Google sign-in error", error);
    }
  };

  return (
    <Section>
      <Container onSubmit={signupWithUsernameAndPassword}>
        <Heading htmlFor="normal">Get Started Now</Heading>
        <Form>
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
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Actions>
            <Button type="submit">Sign up</Button>
            <Text htmlFor="normal">or</Text>
            <GoogleLogin onClick={signupWithGoogle}>
              <FcGoogle size={24} />
              <span>Continue with Google</span>
            </GoogleLogin>
            <Text htmlFor="normal">Have an account? <Link to="/login">Log in</Link></Text>
          </Actions>
        </Form>
      </Container>
      <SectionImage width='60%' src='/images/Computer-login.png' />
    </Section>
  );
}

export default SignupPage;