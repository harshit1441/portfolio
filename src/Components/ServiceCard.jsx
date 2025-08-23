import React from 'react';
import styled from 'styled-components';

const ServiceCard = ({ iconClass, title, description }) => {
  return (
    <ServiceBox>
      <IconWrapper>
        <i className={iconClass}></i>
        <a href="#"><i className="bx bx-arrow-back"></i></a>
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ServiceBox>
  );
};

export default ServiceCard;


// Styled Components
const ServiceBox = styled.div`
  padding: 3rem 2.5rem;
  background: var(--second-bg-color);
  border: 0.2rem solid var(--second-bg-color);
  border-radius: 1rem;
  transition: 0.5s;

  &:hover {
    border-color: var(--main-color);
    transform: scale(1.02);
  }

  &:hover h3 {
    color: var(--main-color);
  }

  &:hover i {
    color: var(--main-color);
  }

  &:hover a {
    background: var(--main-color);
  }

  &:hover a i {
    color: var(--white-color); /* ✅ Fix: make arrow visible */
    transform: rotate(180deg);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    font-size: 4.5rem;
    transition: 0.5s;
  }

  a {
    display: inline-flex;
    background: var(--white-color);
    border-radius: 50%;
    padding: 1rem;
    transition: 0.5s;

    i {
      font-size: 3rem;
      color: var(--bg-color); /* initial color */
      transform: rotate(225deg);
      transition: 0.5s;
    }
  }
`;


const Title = styled.h3`
  font-size: 3rem;
  margin: 0.5rem 0 2rem;
  transition: 0.5s;
`;

const Description = styled.p`
  font-size: 1.6rem;
`;
