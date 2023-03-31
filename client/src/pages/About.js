import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5eefc; // Replace with your desired pale purple color
    font-family: 'Phudu', cursive;
  }
`;

const Wrapper = styled.div`
  // Add your styles here for the wrapper
`;

const Title = styled.h1`
  // Add your styles here for the title
`;

const SectionWrapper = styled.div`
  border: 1px solid black;
  margin: 20px 0;
  padding: 20px;
`;

const SectionTitle = styled.h2`
`;

const SectionContent = styled.p`
  // Add your styles here for the section content
`;

const DoctorWrapper = styled.div`
  margin: 20px 0;
  border: 1px solid;
  padding: 20px;
`;

const DoctorPhoto = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px;
`;

const DoctorName = styled.h3`
  // Add your styles here for the doctor's name
`;

const DoctorBio = styled.p`
  // Add your styles here for the doctor's bio
`;

function About() {
  return (
    <>
    <GlobalStyle/>
      <Wrapper>
        <Title>About Rainbow Clinic</Title>
        <SectionWrapper>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            posuere sapien nec ligula luctus sodales. Donec sit amet posuere
            magna. Etiam maximus, sapien nec congue consequat, nisl odio
            venenatis dolor, at imperdiet turpis magna ac risus.
          </SectionContent>
        </SectionWrapper>
        <SectionWrapper>
          <SectionTitle>Our Doctors</SectionTitle>
          <DoctorWrapper>
          <DoctorPhoto src="doctor3.jpg" alt="Dr. Jane Smith" />
            <DoctorName>Dr. Jane Smith, PhD</DoctorName>
            <DoctorBio>
              Dr. Smith has over 10 years of experience in providing therapy
              and counseling to patients with a wide range of mental health
              concerns. She specializes in cognitive-behavioral therapy and has
              a warm and empathetic approach to working with her patients.
            </DoctorBio>
          </DoctorWrapper>
          <DoctorWrapper>
            <DoctorPhoto src="doctor3.jpg" alt="Dr. John Doe" />
            <DoctorName>Dr. John Doe, MD</DoctorName>
            <DoctorBio>
              Dr. Doe is a board-certified physician with expertise in general
              medicine and internal medicine. He has been practicing for over
              15 years and has a reputation for being a compassionate and
              thorough doctor. He takes a patient-centered approach to care and
              works closely with his patients to develop personalized treatment
              plans.
            </DoctorBio>
          </DoctorWrapper>
          <DoctorWrapper>
            <DoctorPhoto src="doctor3.jpg" alt="Dr. Sarah Lee" />
            <DoctorName>Dr. Sarah Lee, MD</DoctorName>
            <DoctorBio>
              Dr. Lee is a highly skilled anesthesiologist with experience in a
              variety of settings,including hospitals and outpatient clinics. She is dedicated to ensuring her patients' comfort and safety during surgical procedures and has extensive knowledge of pain management techniques. Dr. Lee takes a collaborative approach to care and works closely with the surgical team to ensure that her patients have the best possible outcomes.
            </DoctorBio>
          </DoctorWrapper>
        </SectionWrapper>
      </Wrapper>
    </>
  );
}

export default About;