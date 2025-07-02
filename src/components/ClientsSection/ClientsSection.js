import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Scroll to show the duplicated set */
  }
`;

const ClientsSectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #eec921;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  width: 200%; /* Double width to hold duplicated logos */
  animation: ${scrollLeft} 30s linear infinite;
  
  &:hover {
      animation-play-state: paused;
  }
`;

const LogoWrapper = styled.div`
  flex: 0 0 auto;
  width: 100px; /* Adjust as needed */
  margin: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 80px; /* Adjust as needed */
  opacity: 0.7;
  transition: filter 0.3s ease, opacity 0.3s ease;

  /* Special style for VR Mall Surat logo */
  &[alt='VR Mall Surat'] {
    max-height: 110px;
    transform: scale(1.25);
    object-fit: contain;
  }

  &:hover {
      opacity: 1;
  }
`;

const clients = [
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

const ClientsSection = () => {
  return (
    <ClientsSectionContainer>
      <SectionTitle>OUR CLIENTS</SectionTitle>
      <LogosContainer>
        {[...clients, ...clients].map((client, index) => (
          <LogoWrapper key={index}>
            <LogoImage src={client.logo} alt={client.name} />
          </LogoWrapper>
        ))}
      </LogosContainer>
    </ClientsSectionContainer>
  );
};

export default ClientsSection;