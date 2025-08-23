import React from 'react';
import styled, { keyframes } from 'styled-components';
import homeImg from '../Assets/profilephoto.png';
import { ReactTyped } from 'react-typed';

const rotateBorder = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 10rem 9% 2rem;
  background-color: #111; /* Matches resume section */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 8rem 5% 2rem;
  }
`;

const HomeDetail = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: clamp(3.5rem, 10vw, 5.5rem);
  color: var(--white-color);
`;

const Subtitle = styled.h2`
  display: inline-block;
  font-size: 3.2rem;
  margin-top: -1rem;
  color: var(--main-color);
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  margin: 1rem 0 2.5rem;
  color: var(--white-color);
  text-align: center;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const DownloadBtn = styled.a`
  padding: 1rem 3rem;
  background: var(--main-color);
  border: 0.2rem solid var(--main-color);
  border-radius: 4rem;
  box-shadow: 0 0 1rem var(--main-color);
  font-size: 1.6rem;
  color: var(--bg-color);
  font-weight: 500;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    background: transparent;
    color: var(--main-color);
    box-shadow: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.8rem;

  a {
    display: inline-flex;
    padding: 0.8rem;
    border: 0.2rem solid var(--main-color);
    border-radius: 50%;
    font-size: 2rem;
    color: var(--main-color);
    transition: 0.5s;

    &:hover {
      background: var(--main-color);
      color: var(--bg-color);
      box-shadow: 0 0 1rem var(--main-color);
    }
  }
`;

const HomeImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  position: relative;
  width: 32vw;
  height: 32vw;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50rem;
    height: 50rem;
    background: conic-gradient(transparent, transparent, transparent, var(--main-color));
    border-radius: 50%;
    animation: ${rotateBorder} 10s linear infinite;
  }

  &::after {
    animation-delay: -5s;
  }
`;

const ImgItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #111;
  border-radius: 50%;
  border: 0.01rem solid #111;
  display: flex;
  justify-content: center;
  z-index: 1;
  overflow: hidden;

  img {
    position: absolute;
    top: 6rem;
    display: block;
    width: 85%;
    object-fit: cover;
    mix-blend-mode: lighten;
  }
`;

const Home = () => {
  return (
    <Section id="home" data-bg="#111">
      <HomeDetail>
        <Title>Harshit Agarwal</Title>
        <Subtitle>
          <span style={{ color: 'var(--white-color)' }}>I&apos;m a </span>
          <span style={{ color: 'var(--main-color)' }}>
            <ReactTyped
              strings={['Tech Enthusiast', 'Coder', 'Curious Mind', 'Web Developer']}
              typeSpeed={80}
              backSpeed={60}
              loop
            />
          </span>
        </Subtitle>
        <Paragraph>
  Hi, I’m Harshit Agarwal — somewhere between code and curiosity.
  <br />
  At IIT Bombay, I began by exploring the web — building with React, Django, and more — and wrapped up my first year with an internship.
  <br />
  Now, I’m diving into machine learning and data science — uncovering hidden patterns, untold stories, and questions we didn’t even know to ask.
  <br />
  Maybe you’re looking for them too.
</Paragraph>

        <ButtonSection>
          <DownloadBtn href="#">Download CV</DownloadBtn>
          <SocialIcons>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
            <a href="#"><i className='bx bxl-discord-alt'></i></a>
            <a href="#"><i className='bx bxl-youtube'></i></a>
          </SocialIcons>
        </ButtonSection>
      </HomeDetail>

      <HomeImage>
        <ImgBox>
          <ImgItem>
            <img src={homeImg} alt="Home" />
          </ImgItem>
        </ImgBox>
      </HomeImage>
    </Section>
  );
};

export default Home;
