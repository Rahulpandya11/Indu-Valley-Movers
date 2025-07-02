import React from 'react';
import styled from 'styled-components';
import ServicesGallery from '../components/ServicesGallery/ServicesGallery';
import ContactSection from '../components/ContactSection/ContactSection';

const ServicesPageContainer = styled.div`
  padding: 8rem 2rem 4rem 2rem; /* Reverted padding to account only for fixed header */
  background-color: #f8f8f8;
  min-height: 100vh;
`;

const ServicesPageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  /* Add some space between gallery and form */
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 3rem;
`;

const ServicesPage = () => {
  return (
    <ServicesPageContainer>
      <ServicesPageContent>
        <PageTitle>OUR SERVICES</PageTitle>
        <ServicesGallery />
        <ContactSection />
      </ServicesPageContent>
    </ServicesPageContainer>
  );
};

export default ServicesPage; 