import React from 'react';
import styled from 'styled-components';
import StatsSection from '../components/StatsSection/StatsSection';

const AboutUsContainer = styled.div`
  padding: 8rem 2rem 4rem 2rem; /* Reverted padding to account only for fixed header */
  background-color: #f8f8f8;
  min-height: 100vh;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 1rem;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1.2rem;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin: 2rem 0 3rem 0;
`;

const GalleryImage = styled.img`
  width: 260px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const AboutUsPage = () => {
  return (
    <AboutUsContainer>
      <PageTitle>About Us</PageTitle>
      <Content>
        <Section>
          <SectionText>
            Welcome to Indu Valley Movers—your trusted packers and movers in India. With over a decade of experience in household shifting, office relocation, and specialized transport services, we ensure a seamless, stress-free move every time. Our team of trained professionals uses industry-grade packing materials, modern equipment, and proven processes to deliver top-quality service at competitive rates. Browse the images below to learn more about how we handle each step of your relocation journey.
          </SectionText>
        </Section>
        <Gallery>
          <GalleryImage src="/images/about1.jpg" alt="Elevator-Friendly Packing & Handling" />
          <GalleryImage src="/images/about2.jpg" alt="Door-to-Door Delivery & Logistics Management" />
          <GalleryImage src="/images/about3.jpg" alt="Residential & Commercial Moving Experts" />
          <GalleryImage src="/images/about4.png" alt="Safe Loading, Unloading & Specialized Transport" />
        </Gallery>
        <Section>
          <SectionTitle>1. Elevator-Friendly Packing & Handling</SectionTitle>
          <SectionText>
            We specialize in elevator-friendly packing solutions for apartment shifts, high-rise buildings, and commercial complexes. Our team carefully wraps and secures your furniture, fragile items, and electronics before moving them into elevators—minimizing the risk of damage to both your goods and property. From bulky wardrobes to delicate glassware, we handle every item as if it were our own. Whether you're relocating within Mumbai, Bangalore, Delhi, or anywhere across India, our organized approach guarantees a smooth, no-hassle transition.
          </SectionText>
        </Section>
        <Section>
          <SectionTitle>2. Door-to-Door Delivery & Logistics Management</SectionTitle>
          <SectionText>
            Indu Valley Movers offers reliable door-to-door delivery with real-time tracking and dedicated customer support. From packing your household goods at origin to unloading at your new address, our logistics network spans all major Indian cities and rural areas. Whether it's a local move within Surat or an interstate relocation to Mumbai, we ensure that your cargo arrives safely and on schedule. Our in-house fleet and vetted partners handle paperwork, customs (for international moves), and insurance—so you can relax while we manage the details.
          </SectionText>
        </Section>
        <Section>
          <SectionTitle>3. Residential & Commercial Moving Experts</SectionTitle>
          <SectionText>
            From single-room apartments to multi-floor homes, our residential moving specialists treat your belongings with the utmost care. We also excel at office shifting—minimizing downtime with efficient packing of desks, servers, and document archives. Whether you're a startup moving across Surat or a large corporation relocating in Delhi NCR, our experts plan each step: inventory assessment, custom crating for sensitive equipment, and strategic loading. Our state-of-the-art moving trucks are equipped with lift-gates, tie-down straps, and air-ride suspension to protect expensive assets.
          </SectionText>
        </Section>
        <Section>
          <SectionTitle>4. Safe Loading, Unloading & Specialized Transport</SectionTitle>
          <SectionText>
            Our trained crew follows strict standard operating procedures during loading and unloading, ensuring zero damage to your goods. For bulky items like sofas, pianos, or gym equipment, we use custom-sized dollies, padded blankets, and corner guards. Additionally, Indu Valley offers specialized vehicle transportation across India—door-to-door car carriers with GPS tracking and insurance. From two-wheelers to luxury sedans, your vehicle is in safe hands as it travels from Mumbai to Kolkata or Bengaluru to Hyderabad.
          </SectionText>
        </Section>
      </Content>
      <StatsSection />
    </AboutUsContainer>
  );
};

export default AboutUsPage; 