import React from 'react';
import styled, { keyframes } from 'styled-components';
import ContactForm from '../ContactForm/ContactForm';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  padding: 4rem 2rem;
  background: #fff;
  flex-wrap: wrap;
  margin-top: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 1rem;
    margin-top: 2.5rem;
  }
`;

const Left = styled.div`
  flex: 1 1 350px;
  max-width: 520px;
  min-width: 280px;
  animation: ${fadeIn} 0.7s both;
  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 0;
    width: 100%;
  }
`;

const HeadingBox = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 2.5rem;
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #222;
  line-height: 1.1;
  margin: 0;
  z-index: 2;
  position: relative;
  span {
    display: block;
    color: #222;
    font-size: 2.8rem;
    font-weight: 800;
    margin-top: 0.2rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
    span {
      font-size: 2rem;
    }
  }
`;

const BoxOutline = styled.div`
  position: absolute;
  top: -18px;
  left: -18px;
  width: 320px;
  height: 90px;
  border: 6px solid #f3f3f3;
  z-index: 1;
  @media (max-width: 500px) {
    width: 180px;
    height: 50px;
    top: -6px;
    left: -6px;
  }
`;

const Description = styled.p`
  color: #6a6a6a;
  font-size: 1.08rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 95%;
  @media (max-width: 600px) {
    font-size: 0.98rem;
  }
`;

const LearnMoreButton = styled.a`
  display: inline-block;
  background: #1a253b;
  color: #fff;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 0.95rem 2.5rem;
  border-radius: 2px;
  text-decoration: none;
  letter-spacing: 0.03em;
  box-shadow: 0 2px 8px rgba(26,37,59,0.08);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  &:hover {
    background: #eec921;
    color: #222;
    transform: translateY(-2px) scale(1.03);
  }
`;

const Right = styled.div`
  flex: 1 1 350px;
  max-width: 420px;
  min-width: 280px;
  animation: ${fadeIn} 0.7s 0.2s both;
  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 0;
    width: 100%;
  }
`;

const ContactSection = () => (
  <Section>
    <Left>
      <HeadingBox>
        <Heading>
          WE ARE<br />
          <span>MOVING COMPANY</span>
        </Heading>
        <BoxOutline />
      </HeadingBox>
      <Description>
        We at INDU VALLEY Packers & Movers , for imparting excellent services in packing and moving segments. We have designed our services proficiently to meet the maximum customer satisfaction, and rendered them in such a way that comes out high on the expectations of our clients.
      </Description>
      <LearnMoreButton href="#">LEARN MORE</LearnMoreButton>
    </Left>
    <Right>
      <ContactForm />
    </Right>
  </Section>
);

export default ContactSection; 