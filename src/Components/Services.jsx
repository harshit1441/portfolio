import React from 'react';
import styled from 'styled-components';
import ServiceCard from './ServiceCard';

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 10rem 9% 2rem;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 4.5rem;
  text-align: center;
  margin-bottom: 4rem;

  span {
    color: var(--main-color);
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2.5rem;
`;

const Services = () => {
  const servicesData = [
    {
      iconClass: 'bx bx-code-alt',
      title: 'Frontend Development',
      description: 'Building responsive, interactive, and modern web interfaces using React, styled-components, and CSS-in-JS.',
    },
    {
      iconClass: 'bx bx-server',
      title: 'Backend Development',
      description: 'Creating robust backends with Django REST framework, integrating APIs, and managing data with relational databases.',
    },
    {
      iconClass: 'bx bx-link',
      title: 'Frontend & Backend Integration',
      description: 'Seamlessly connecting React frontends with Django or Firebase backends for complete full-stack applications.',
    },
    {
      iconClass: 'bx bx-lock',
      title: 'Authentication & Hosting',
      description: 'Implementing secure user authentication with Firebase, and deploying projects on reliable hosting platforms.',
    },
    {
      iconClass: 'bx bxl-shopify',
      title: 'Shopify Development',
      description: 'Building and customizing Shopify-based websites and apps, extending functionality and improving user experience.',
    },
    {
      iconClass: 'bx bx-brain',
      title: 'Exploring Machine Learning',
      description: 'Open to ML projects — eager to learn, experiment, and contribute to data-driven solutions and intelligent systems.',
    }
  ];

  return (
    <Section id="services" data-bg="#1f242d">
      <Heading>
        My <span>Services</span>
      </Heading>
      <Container>
        {servicesData.map((service, idx) => (
          <ServiceCard
            key={idx}
            iconClass={service.iconClass}
            title={service.title}
            description={service.description}
          />
        ))}
      </Container>
    </Section>
  );
};

export default Services;


