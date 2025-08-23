import React, { useState } from "react";
import styled from "styled-components";
import "boxicons/css/boxicons.min.css";
import project1 from "../Assets/project1.png";
import project2 from "../Assets/project2.png";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 2rem 9%;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = styled.h2`
  font-size: 4.5rem;
  text-align: center;
  color: var(--white-color);
  margin-bottom: 2rem;

  span {
    color: var(--main-color);
  }
`;

const PortfolioContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 400px;
`;

const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 500px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => `-${props.index * 100}%`});
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

const ProjectBox = styled.div`
  padding: 0;
`;

const Number = styled.p`
  font-size: 4rem;
  color: transparent;
  -webkit-text-stroke: 1px var(--white-color);
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--white-color);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin: 1.5rem 0;
  color: #aaa;
  font-size: 1.5rem;
`;

const Tech = styled.p`
  color: #50fa7b;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  i {
    font-size: 2.4rem;
    background: #242932;
    color: white;
    padding: 1.2rem;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: var(--main-color);
    }
  }
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding-bottom: 1rem;

  button {
    background: transparent;
    border: 2px solid var(--main-color);
    color: var(--main-color);
    padding: 1rem 1.5rem;
    border-radius: 0.8rem;
    font-size: 2rem;
    cursor: pointer;
    transition: 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--main-color);
      color: var(--bg-color);
    }

    &:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
  }
`;

const projects = [
  {
    number: "01",
    title: "Frontend Project",
    description:
      "A modern UI built with HTML, CSS, and JavaScript showcasing responsive design and animations.",
    tech: "HTML5, CSS3, JavaScript",
    image: project1,
    liveLink: "https://currency-converter-kohl-iota.vercel.app/",
  },
  {
    number: "02",
    title: "Backend API",
    description:
      "RESTful API built with Django for a notes application with PostgreSQL integration.",
    tech: "Python, Django, PostgreSQL",
    image: project2,
    liveLink: "#",
  },
];

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  return (
    <Section id="portfolio">
      <Heading>
        Latest <span>Project</span>
      </Heading>

      <PortfolioContent>
        <TextContent>
          <ProjectBox>
            <Number>{project.number}</Number>
            <Title>{project.title}</Title>
            <Description>{project.description}</Description>
            <Tech>{project.tech}</Tech>
            <Buttons>
              <i
                className="bx bx-link-external"
                title="Live Project"
                onClick={() => window.open(project.liveLink, "_blank")}
              />
            </Buttons>
          </ProjectBox>
        </TextContent>

        <ImageContent>
          <SliderWrapper index={index}>
            {projects.map((proj, idx) => (
              <Slide key={idx}>
                <img src={proj.image} alt={proj.title} />
              </Slide>
            ))}
          </SliderWrapper>
        </ImageContent>
      </PortfolioContent>

      <NavButtons>
        <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
          <i className="bx bx-chevron-left" />
        </button>
        <button
          onClick={() => setIndex(index + 1)}
          disabled={index === projects.length - 1}
        >
          <i className="bx bx-chevron-right" />
        </button>
      </NavButtons>
    </Section>
  );
};

export default Portfolio;

