import React, { useState } from "react";
import styled from "styled-components";
import ResumeTabs from "./ResumeTabs";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const ResumeSection = styled.section`
  min-height: 100vh; /* Full screen height */
  padding: 60px 40px;
  background-color: #111;
  color: #fff;
  display: flex;
  align-items: center;
`;

const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResumeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const Heading = styled.h2`
  font-size: 4.5rem;
`;

const Description = styled.p`
  font-size: 1.6rem;
  margin: 2rem 0 2.5rem;
`;

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <ResumeSection id="resume" data-bg="#111">
      <ResumeContainer>
        <ResumeBox>
          <Heading>Why Hire Me?</Heading>
          <Description>
  Not just another developer — I’m someone who turns curiosity into impact. Why not see what happens?
</Description>
          <ResumeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </ResumeBox>

        <ResumeBox>
          {activeTab === "Experience" && <Experience />}
          {activeTab === "Education" && <Education />}
          {activeTab === "Skills" && <Skills />}
          {activeTab === "AboutMe" && <AboutMe />}
        </ResumeBox>
      </ResumeContainer>
    </ResumeSection>
  );
};

export default Resume;
