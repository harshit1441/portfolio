import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled Components
const HeaderWrapper = styled.header`
  position: fixed;
  top: ${({ isHidden }) => (isHidden ? "-100px" : "0")};
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: ${({ bgColor }) => bgColor || "var(--bg-color)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: top 0.4s ease, background-color 0.3s ease;
`;

const Logo = styled.a`
  font-size: 3rem;
  color: var(--white-color);
  font-weight: 700;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${({ bgColor }) => bgColor || "var(--bg-color)"};
    padding: 1rem 0;
  }
`;

const NavLink = styled.a`
  font-size: 2rem;
  color: var(--white-color);
  font-weight: 500;
  margin-left: 3.5rem;
  transition: 0.5s;
  text-decoration: none;

  &:hover,
  &.active {
    color: var(--main-color);
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const MenuIcon = styled.i`
  font-size: 4rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("var(--bg-color)");
  const [isHidden, setIsHidden] = useState(false);

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const color = entry.target.getAttribute("data-bg");
            if (color) setBgColor(color);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true); // Scroll down -> hide
      } else {
        setIsHidden(false); // Scroll up -> show
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper bgColor={bgColor} isHidden={isHidden}>
      <Logo href="#">Welcome To My Portfolio</Logo>
      <MenuIcon className="bx bx-menu" onClick={() => setIsOpen(!isOpen)} />
      <Nav isOpen={isOpen} bgColor={bgColor}>
        <NavLink onClick={() => handleScrollTo("home")}>Home</NavLink>
        <NavLink onClick={() => handleScrollTo("services")}>Services</NavLink>
        <NavLink onClick={() => handleScrollTo("resume")}>Resume</NavLink>
        <NavLink onClick={() => handleScrollTo("portfolio")}>Portfolio</NavLink>
        <NavLink onClick={() => handleScrollTo("contact")}>Contact</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
