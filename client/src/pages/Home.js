import React from 'react';
import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';

const Container = styled.div`
font-family: 'Phudu', cursive;
// display: flex;
// flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color: aliceblue;
`;

const Title = styled.div`
text-align: center;
font-size: 30px;
`;

const Paragraph = styled.div`
text-align: center;
margin: 1em`;

const MedCard = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #c7d3fc;
  margin: .5em;
`;

function Home() {
  return (
    <Container>
      <Title>Our Approach</Title>
      <Paragraph>The experimental medicine company is owned by an individual who is committed to improving the mental health of her hometown. The company is focused on developing innovative treatments and therapies for a range of mental health disorders, including anxiety, depression, bipolar disorder, and schizophrenia.</Paragraph>
      <Paragraph>The company's approach is based on cutting-edge research in neuroscience and psychology, and it works closely with leading experts in the field to identify promising new approaches to treatment. In addition to developing new drugs and therapies, the company also invests in education and outreach programs to raise awareness about mental health issues and promote access to care.</Paragraph>
      <Paragraph>The company's mission is to make a real difference in the lives of people struggling with mental health disorders, and to contribute to a broader movement to reduce stigma and improve mental health outcomes in the community. Through its innovative research and commitment to social responsibility, the company is poised to become a leader in the field of mental health care.</Paragraph>

      <MedCard style={{ width: '15rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Psychosocial Therapy</Card.Title>
          <Card.Text>
          Psychosocial treatments include different types of psychotherapy and social and vocational training that aim to provide support, education and guidance to people with mental health conditions and their families.
          </Card.Text>
          <Button variant="primary">More About This</Button>
        </Card.Body>
      </MedCard>
      <MedCard style={{ width: '15rem' }}>
        <Card.Img variant="top" url="http://www.infusionofcare.com/img/infusionsub.jpg" />
        <Card.Body>
          <Card.Title>Ketamine Infusion</Card.Title>
          <Card.Text>
          IV ketamine infusion therapy is being used to treat people with drug-resistant depression. While it’s being used “off-label,” because as a generic drug, it has not been submitted for FDA approval, patients and researchers are reporting positive results.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </MedCard>
      <MedCard style={{ width: '15rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Brain Stimulation</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </MedCard>
        <MedCard style={{ width: '15rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Filler</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </MedCard>
    </Container>
  );
}

export default Home;