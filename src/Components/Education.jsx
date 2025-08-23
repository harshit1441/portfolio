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

const Institution = styled.p`
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

const educationData = [
  {
    year: "2025 - Present",
    title: "B.S. under CLEdu Department",
    institution: "IIT Bombay",
    description: "Currently enrolled in the CLEdu department, allowing flexibility to take courses from any department and graduate with a BS in the department where maximum credits are earned.",
  },
  
  {
    year: "2024",
    title: "B.S. in Chemistry (First Year)",
    institution: "IIT Bombay",
    description: "Started undergraduate studies with a major in Chemistry.",
  },

  {
    year: "2023",
    title: "12th Grade",
    institution: "Simpkins School, Agra",
    description: "Scored 93.4% in Class 12 board examinations.",
  },

  {
    year: "2021",
    title: "10th Grade",
    institution: "Simpkins School, Agra",
    description: "Scored 96% in Class 10 board examinations.",
  }
  
];

const Education = () => {
  return (
    <Container>
      <Heading>
        My <span>Education</span>
      </Heading>
      <Grid>
        {educationData.map((edu, index) => (
          <Card key={index}>
            <Year>{edu.year}</Year>
            <Title>{edu.title}</Title>
            <Institution>{edu.institution}</Institution>
            <Description>{edu.description}</Description>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Education;
