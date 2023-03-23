import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // Add your styles here for the wrapper
`;

const Title = styled.h1`
  // Add your styles here for the title
`;

const Paragraph = styled.p`
  // Add your styles here for the paragraph
`;

function About() {
  return (
    <>
      <Wrapper>
        <Title>About Us</Title>
        <Paragraph>
          Add your content here for the about page
        </Paragraph>
      </Wrapper>
    </>
  );
}

export default About;
