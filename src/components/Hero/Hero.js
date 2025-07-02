import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const slides = [
  {
    tagline: 'ON THE MOVE?',
    description: 'Whether dawn breaks or dusk falls, our expert crew safely loads and delivers your belongings on time and intact.',
    image: '/images/Photo1.jpeg',
    preview: '/images/Photo1.jpeg',
  },
  {
    tagline: 'PREMIUM PACKING?',
    description: 'Our skilled team wraps, organizes, and places every item with care so your home stays spotless and stress-free.',
    image: '/images/Photo2.jpg',
    preview: '/images/Photo2.jpg',
  },
  {
    tagline: 'TIRED OF MOVING?',
    description: 'Skip the headache and heavy lifting—let us handle your move so you can relax instead of getting buried in boxes.',
    image: '/images/Photo3.jpg',
    preview: '/images/Photo3.jpg',
  },
];

const slideUpIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const HeroSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    min-height: 80vh;
  }
`;

const MainImageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`;

const MainImage = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(${props => props.image}) center center/cover no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${props => props.z || 1};
  display: flex;
  align-items: center; /* Align content center vertically */
  justify-content: flex-start; /* Align content to the left */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 2;
  }
`;

const AnimatedImage = styled(MainImage)`
  animation: ${slideUpIn} 0.6s forwards;
`;

const HeroContent = styled.div`
  z-index: 3;
  color: #fff;
  max-width: 600px;
  text-align: left;
  padding: 0 2rem; /* Reverted padding to account only for fixed header */

  @media (max-width: 900px) {
      padding: 0 1rem; /* Reverted padding for smaller screens */
  }

  h1 {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.2);

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    text-shadow: 0 1px 4px rgba(0,0,0,0.1);

    @media (max-width: 768px) {
       font-size: 1rem;
    }
  }

  span {
      color: #eec921; /* Highlight color for INDU VALLEY */
      font-weight: 700;
  }
`;

const EnquireButton = styled.a`
  display: inline-block;
  background: #eec921;
  color: #222;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #ffd700;
    transform: translateY(-2px);
  }
`;

const PreviewContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -110px; /* Position 50% of the 220px wide preview image off screen */
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  /* Adjusted styling for better layout of arrow and image */
  gap: 0; /* Remove any default gap */

  @media (max-width: 900px) {
    display: none;
  }
`;

const PreviewImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 0 0 0 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  margin: 0;
`;

const ArrowBox = styled.button`
  /* Restore original positioning relative to the container */
  position: static; 
  left: auto;
  top: auto;
  transform: none;

  background: transparent;
  border: none;
  border-radius: 0;
  /* Adjusted size */
  width: 163px; /* Updated width */
  height: 64px; /* Updated height */

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: none;
  transition: none;
  padding: 0;
`;

const ArrowSvg = styled.svg`
  /* Adjusted size */
  width: 163px; /* Updated width */
  height: 64px; /* Updated height */
  display: block;
`;

const ArrowLine = styled.line`
  stroke: #bbb;
  /* Adjusted stroke width */
  stroke-width: 6; /* Keeping the stroke width for visibility */
`;

const ArrowHead = styled.polyline`
  fill: none;
  stroke: #bbb;
  /* Adjusted stroke width */
  stroke-width: 6; /* Keeping the stroke width for visibility */
`;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const current = slides[index];
  const nextIndex = (index + 1) % slides.length;
  const next = slides[nextIndex];

  const handleNext = () => {
    setShowNext(true);
    setTimeout(() => {
      setIndex(nextIndex);
      setShowNext(false);
    }, 600);
  };

  return (
    <HeroSection>
      <MainImageWrapper>
        <MainImage image={current.image} z={1}>
           {/* Content placed inside the image div to ensure it's on top of the background */}
          <HeroContent>
            <h1>{current.tagline}</h1>
            <p>{current.description}</p>
            <EnquireButton href="/price-calculator">ENQUIRE NOW</EnquireButton>
          </HeroContent>
        </MainImage>
        {showNext && (
          <AnimatedImage image={next.image} z={2}>
            <HeroContent>
              <h1>{next.tagline}</h1>
              <p>{next.description}</p>
              <EnquireButton href="/price-calculator">ENQUIRE NOW</EnquireButton>
            </HeroContent>
          </AnimatedImage>
        )}
      </MainImageWrapper>
      <PreviewContainer>
        <ArrowBox onClick={handleNext} aria-label="Next slide">
          <ArrowSvg viewBox="0 0 163 64">{/* Updated viewBox */}
            <ArrowLine x1="0" y1="32" x2="138" y2="32" />{/* Updated coordinates */}
            <ArrowHead points="128,16 163,32 128,48" />{/* Updated coordinates */}
          </ArrowSvg>
        </ArrowBox>
        <PreviewImage src={next.preview} alt="Next preview" />
      </PreviewContainer>
    </HeroSection>
  );
};

export default Hero;