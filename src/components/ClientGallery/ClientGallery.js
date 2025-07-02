import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const entranceAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px) rotateZ(-10deg) scale(0.8);
  }
  40% {
    opacity: 0.7;
    transform: translateY(-10px) rotateZ(5deg) scale(1.05);
  }
  70% {
      transform: translateY(5px) rotateZ(-2deg) scale(1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateZ(0deg) scale(1);
  }
`;

const hoverAnimation = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.07); }
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* Slightly larger min width */
  gap: 2.5rem; /* Increased gap */
  padding: 2rem 0;
`;

const LogoWrapper = styled.div`
  background-color: #fff;
  border-radius: 12px; /* Slightly larger radius */
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  padding: 2rem; /* Increased padding */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Ensure no overflow during animation */
  cursor: pointer;
  
  opacity: 0;
  transform: translateY(60px) rotateZ(-10deg) scale(0.8);
  animation: ${props => props.playAnimation ? entranceAnimation : 'none'} 0.9s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  transition: box-shadow 0.3s ease;

  &:hover {
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      animation: ${entranceAnimation} 0.9s ease-out forwards, ${hoverAnimation} 0.3s forwards;
  }
`;

const LogoImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 120px; /* Increased max height */
  opacity: 0.8;
  transition: filter 0.3s ease, opacity 0.3s ease;

  /* Special style for VR Mall Surat logo */
  &[alt='VR Mall Surat'] {
    max-height: 160px;
    transform: scale(1.3);
    object-fit: contain;
  }

  ${LogoWrapper}:hover & {
    opacity: 1;
  }
`;

// Updated client logos data with real logo files
const clientLogos = [
    { name: 'Citibank', logo: '/images/Citibank.png' },
    { name: 'HDFC Bank', logo: '/images/HDFC.png' },
    { name: 'ICICI Bank', logo: '/images/ICICI_Bank_Logo.svg.png' },
    { name: 'IndianOil', logo: '/images/indianoil.png' },
    { name: 'Kotak Mahindra Bank', logo: '/images/Kotak_Mahindra_Bank_logo.png' },
    { name: 'LIC', logo: '/images/lic.png' },
    { name: 'NTPC', logo: '/images/National_Thermal_Power_logo.svg.png' },
    { name: 'ONGC', logo: '/images/Oil_and_Natural_Gas_Corporation-Logo.wine.png' },
    { name: 'PNB', logo: '/images/pnb.png' },
    { name: 'Rajhans Surat', logo: '/images/Rajhans surat.png' },
    { name: 'Reliance', logo: '/images/Reliance-Industries-Limited-Logo.png' },
    { name: 'Shell', logo: '/images/Shell_Oil_Company-Logo.wine.png' },
    { name: 'Tanishq', logo: '/images/tanishq.png' },
    { name: 'VR Mall Surat', logo: '/images/VR mall Surat.png' },
];

const ClientGallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <GalleryContainer>
        {clientLogos.map((client, index) => (
          <LogoWrapper key={index} delay={`${index * 0.07}s`} playAnimation={inView}>
            <LogoImage src={client.logo} alt={client.name} />
          </LogoWrapper>
        ))
        }
      </GalleryContainer>
    </div>
  );
};

export default ClientGallery;