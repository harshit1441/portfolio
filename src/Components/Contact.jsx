import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 6rem 10%;
  background-color: #0f172a;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
`;

const Left = styled.div`
  flex: 1;
  min-width: 300px;

  h2 {
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 3rem;
    color: #cbd5e1;
  }

  .info {
    display: flex;
    align-items: center;
    margin-bottom: 1.8rem;
    font-size: 1.7rem;

    i {
      font-size: 2.2rem;
      color: #4ade80;
      margin-right: 1rem;
    }

    span {
      color: #4ade80;
      font-weight: 500;
    }
  }
`;

const Right = styled.div`
  flex: 1.2;
  min-width: 350px;
  background-color: #1e293b;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;

  span {
    color: var(--main-color, #4ade80);
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  textarea {
    grid-column: 1 / 3;
  }

  button {
    grid-column: 1 / 3;
  }
`;

const Input = styled.input`
  padding: 1.4rem 1.6rem;
  font-size: 1.7rem;
  border-radius: 8px;
  background-color: #0f172a;
  color: #fff;
  border: 2px solid var(--main-color, #4ade80);
  transition: 0.3s ease;

  &:focus {
    border-color: #7cf03d;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 1.4rem 1.6rem;
  font-size: 1.7rem;
  border-radius: 8px;
  background-color: #0f172a;
  color: #fff;
  border: 2px solid var(--main-color, #4ade80);
  resize: vertical;
  min-height: 140px;
  transition: 0.3s ease;

  &:focus {
    border-color: #7cf03d;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #0f172a;
  background-color: var(--main-color, #4ade80);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 15px var(--main-color, #4ade80);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #22c55e;
  }
`;

const Contact = () => {
  const [state, handleSubmit] = useForm("mqalenva");
  
  if (state.succeeded) {
    return (
      <Container>
        <ContentWrapper>
          <Left>
            <h2>Let's Work Together</h2>
            <p>Thank you for reaching out! I'll get back to you soon.</p>
          </Left>
        </ContentWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <ContentWrapper>
        <Left>
          <h2>Let's Work Together</h2>
          <p>
            Feel free to reach out via any of the following methods. I'm open to projects,
            collaborations, or a friendly conversation.
          </p>

          <div className="info">
            <i className="bx bx-phone-call"></i>
            <span>(+91) 8279546826</span>
          </div>
          <div className="info">
            <i className="bx bx-envelope"></i>
            <span>harshitagarwal1441@gmail.com</span>
          </div>
          <div className="info">
            <i className="bx bx-map"></i>
            <span>Hostel-18, IIT BOMBAY, Powai, Mumbai, India </span>
          </div>
        </Left>

        <Right>
          <Title>
            Contact <span>Me!</span>
          </Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <Input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <SubmitButton type="submit" disabled={state.submitting}>Send Message</SubmitButton>
          </Form>
        </Right>
      </ContentWrapper>
    </Container>
  );
};

export default Contact;
