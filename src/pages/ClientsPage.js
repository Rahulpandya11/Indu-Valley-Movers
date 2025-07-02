import React from 'react';
import styled from 'styled-components';
import ClientGallery from '../components/ClientGallery/ClientGallery';
import ContactSection from '../components/ContactSection/ContactSection';

const ClientsPageContainer = styled.div`
  padding: 8rem 2rem 4rem 2rem; /* Reverted padding to account only for fixed header */
  background-color: #f8f8f8;
  min-height: 100vh;
`;

const ClientsPageContent = styled.div`
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

const ClientsPage = () => {
  return (
    <ClientsPageContainer>
      <ClientsPageContent>
        <PageTitle>OUR CLIENTS</PageTitle>
        <ClientGallery />
        <ContactSection />
      </ClientsPageContent>
    </ClientsPageContainer>
  );
};

export default ClientsPage; 