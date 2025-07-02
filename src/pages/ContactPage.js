import React from 'react';
import styled, { keyframes } from 'styled-components';
import ContactForm from '../components/ContactForm/ContactForm';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactPageContainer = styled.div`
  padding: 8rem 2rem 4rem 2rem;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

const ContactContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const MapContainer = styled.div`
  height: 400px;
  background-color: #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  animation: ${fadeIn} 0.7s both;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  animation: ${fadeIn} 0.7s 0.2s both;
`;

const Right = styled.div`
  animation: ${fadeIn} 0.7s 0.3s both;
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
    width: 220px;
    height: 70px;
    top: -10px;
    left: -10px;
  }
`;

const Description = styled.p`
  color: #6a6a6a;
  font-size: 1.08rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 95%;
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

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactContentWrapper>
        <MapContainer>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1234567890123!2d72.8319697!3d21.1702401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0x261b0c9c0c9c0c9c!2s261%20Raj%20Victoria%20Pal%20Gam%2C%20Surat%2C%20Gujarat%20395009!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
          />
        </MapContainer>
        <ContentSection>
          <Left>
            <HeadingBox>
              <Heading>
                WE ARE<br />
                <span>MOVING COMPANY</span>
              </Heading>
              <BoxOutline />
            </HeadingBox>
            <Description>
              We at INDU VALLEY Packers & Movers, for imparting excellent services in packing and moving segments. We have designed our services proficiently to meet the maximum customer satisfaction, and rendered them in such a way that comes out high on the expectations of our clients.
            </Description>
            <LearnMoreButton href="#">LEARN MORE</LearnMoreButton>
          </Left>
          <Right>
            <ContactForm />
          </Right>
        </ContentSection>
      </ContactContentWrapper>
    </ContactPageContainer>
  );
};

export default ContactPage; 