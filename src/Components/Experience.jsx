import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #1e1e1e;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  color: white;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
  }
`;

const Year = styled.h4`
  color: #4ade80;
  font-size: 1.6rem;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Company = styled.p`
  font-size: 1.4rem;
  color: #b0b0b0;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: #ccc;
`;

const Heading = styled.h2`
  color: white;
  font-size: 3.5rem;
  margin-bottom: 30px;

  span {
    color: #4ade80;
  }
`;

const experienceData = [
  {
    year: "May 2025 - Jul 2025",
    title: "Web Development Intern",
    company: "6Miles",
    description: "Worked on project Aniyor which is a full-stack, multi-vendor marketplace platform that extends Shopify’s capabilities to support both products and services under a unified storefront.",
  },

  {
    year: "Mar 2025 - Present",
    title: "Web Developer",
    company: "Devcom IIT Bombay",
    description: "Working on a research & career portal for students and professors at IIT Bombay. Part of the institute’s prestigious web & app development community.",
  },

  {
    year: "Jan 2025 - Mar 2025",
    title: "Trainee Web Developer",
    company: "Devcom IIT Bombay",
    description: "Built Prodify, a React + Django task & calendar manager for students. Learned full-stack development.",
  },

  {
    year: "2024 Autumn",
    title: "Drone Remote Control Project",
    company: "Makerspace Academic Course, IIT Bombay",
    description: "Designed PCB and CAD for a drone remote control as part of a team project.",
  }
  
];


const Experience = () => {
  return (
    <Container>
      <Heading>
        My <span>Experience</span>
      </Heading>
      <Grid>
        {experienceData.map((exp, index) => (
          <Card key={index}>
            <Year>{exp.year}</Year>
            <Title>{exp.title}</Title>
            <Company>{exp.company}</Company>
            <Description>{exp.description}</Description>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Experience;
