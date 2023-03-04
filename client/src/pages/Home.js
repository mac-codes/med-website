import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
font-family: 'Phudu', cursive;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color: aliceBlue;`

const Title = styled.div`
text-align: center;`;

const Paragraph = styled.div`
text-align: center;
margin: 1em`;

function Home() {
  return (
    <Container>
      <Title>Our Approach</Title>
      <Paragraph>The experimental medicine company is owned by an individual who is committed to improving the mental health of her hometown. The company is focused on developing innovative treatments and therapies for a range of mental health disorders, including anxiety, depression, bipolar disorder, and schizophrenia.</Paragraph>
      <Paragraph>The company's approach is based on cutting-edge research in neuroscience and psychology, and it works closely with leading experts in the field to identify promising new approaches to treatment. In addition to developing new drugs and therapies, the company also invests in education and outreach programs to raise awareness about mental health issues and promote access to care.</Paragraph>
      <Paragraph>The company's mission is to make a real difference in the lives of people struggling with mental health disorders, and to contribute to a broader movement to reduce stigma and improve mental health outcomes in the community. Through its innovative research and commitment to social responsibility, the company is poised to become a leader in the field of mental health care.</Paragraph>
    </Container>
  );
}

export default Home;