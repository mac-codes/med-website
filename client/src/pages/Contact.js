import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5eefc; // Replace with your desired pale purple color
    font-family: 'Phudu', cursive;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 50px 0;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
`;

const FormWrapper = styled.form`
  // Add your styles here for the form wrapper
`;

const FormLabel = styled.label`
  // Add your styles here for the form label
`;

const FormInput = styled.input`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

const FormSubmitButton = styled.button`
  // Add your styles here for the form submit button
`;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to send the form data to your server or API
    setIsSubmitted(true);
  };

  return (
    <>
    <GlobalStyle/>
      <Wrapper>
        <Title>Contact Us</Title>
        <FormWrapper onSubmit={handleSubmit}>
          <div style={{fontSize: '20px'}}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div style={{ margin: '16px'}}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextArea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <FormSubmitButton type="submit">Send</FormSubmitButton>
        </FormWrapper>
        {isSubmitted && (
          <p>Thank you for your message! We will get back to you soon.</p>
        )}
      </Wrapper>
    </>
  );
}

export default Contact;