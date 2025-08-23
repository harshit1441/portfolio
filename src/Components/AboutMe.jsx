import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  text-align: left;
  color: white;
`;

const Title = styled.h2`
  font-size: 3.5rem; /* Increased for prominence */
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  color: #4ade80;
`;

const Description = styled.p`
  color: #b0b0b0;
  font-size: 1.5rem; /* Slightly bigger for clarity */
  margin-bottom: 30px;
  max-width: 700px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

const InfoItem = styled.div`
  font-size: 1.3rem; /* Increased text size */
`;

const Label = styled.span`
  color: #4ade80;
  font-weight: bold;
`;

const aboutData = [
  { label: "Name", value: " Harshit Agarwal" },
  { label: "Gender", value: " Male" },
  { label: "Age", value: " 19 Years Old" },
  { label: "Status", value: " Single" },
  { label: "City", value: " Mumbai, India" },
  { label: "Nationality", value: " Indian" },
  { label: "Experience", value: " Student" },
  { label: "Full Time", value: " Unavailable" },
  { label: "Freelance", value: " Available" },
  { label: "Phone", value: " (+91) 8279546826" },
  { label: "Email", value: " harshitagarwal1441@gmail.com" },
  { label: "Languages", value: " English, Hindi" },
];

const AboutMe = () => {
  return (
    <Container>
      <Title>
        About <Highlight>Me</Highlight>
      </Title>
      <Description>
  I’m Harshit Agarwal, a student at IIT Bombay with an insatiable curiosity for how things work — and how to make them better. My journey began in web development, where I built projects using frameworks like React and Django, and wrapped up my first year with an internship that taught me how ideas turn into real-world solutions. Lately, I’ve been exploring machine learning and data science, fascinated by the patterns and insights hidden in data. Beyond just writing code, I love asking questions that don’t have obvious answers, connecting with people who think differently, and chasing the excitement of uncovering something new. My story is still unfolding — and I’m always looking for what comes next.
      </Description>
      <Grid>
        {aboutData.map((item, index) => (
          <InfoItem key={index}>
            <Label>{item.label}: </Label> {item.value}
          </InfoItem>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutMe;

