import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #1a253b;
  color: #f8f8f8;
  padding: 4rem 2rem 2rem 2rem;
  font-family: inherit;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #3a455b;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #eec921;
  }

  p,
  a {
    font-size: 1rem;
    color: #f8f8f8;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    transition: color 0.2s ease;
    &:hover {
      color: #eec921;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: #eec921;
    stroke-width: 1.5;
  }
`;

const LocationSection = styled.div`
  h4 {
    font-size: 1.5rem;
    color: #eec921;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const StyledLink = styled.a`
  font-size: 1rem;
  color: #f8f8f8;
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;
  &:hover {
    color: #eec921;
  }
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem 2rem;
`;

const Footer = () => {
  const locations = [
    "Packers and movers in Surat", "Packers and movers in Mumbai", "Packers and movers in Pune", "Packers and movers in Delhi",
    "Packers and movers in Bangalore", "Packers and movers in Rajkot", "Packers and movers in Goa", "Packers and movers in Jamnagar",
    "Packers and movers in Gandhidham", "Packers and movers in Gandhinagar", "Packers and movers in Nagpur", "Packers and movers in Agra",
    "Packers and movers in AJMER", "Packers and movers in AKOLA", "Packers and movers in ALLAHABAD", "Packers and movers in AMARAVATHI",
    "Packers and movers in AMRITSAR", "Packers and movers in ANANTAPUR", "Packers and movers in ASANSOL", "Packers and movers in AURANGABAD",
    "Packers and movers in BANGALORE", "Packers and movers in BAREILLY", "Packers and movers in BELGAUM", "Packers and movers in BERHAMPUR",
    "Packers and movers in BHAGALPUR", "Packers and movers in BHATINDA", "Packers and movers in BHAVNAGAR", "Packers and movers in BHILLIWARA",
    "Packers and movers in BHUBANESWAR", "Packers and movers in BIJAPUR", "Packers and movers in BIKANER", "Packers and movers in BILASPUR",
    "Packers and movers in BODHGAYA", "Packers and movers in CHANDIGARH", "Packers and movers in CHENNAI", "Packers and movers in COCHIN",
    "Packers and movers in COIMBATORE", "Packers and movers in CUTTACK", "Packers and movers in DAMAN", "Packers and movers in DARBHANGA",
    "Packers and movers in DEHRADUN", "Packers and movers in DHANBAD", "Packers and movers in DHIDHAPUR", "Packers and movers in DURGAPUR",
    "Packers and movers in ELURU", "Packers and movers in ERODE", "Packers and movers in FARIDABAD", "Packers and movers in GHAZIABAD",
    "Packers and movers in GOA", "Packers and movers in GOA", "Packers and movers in GORAKHPUR", "Packers and movers in GUJARAT",
    "Packers and movers in GUNTUR", "Packers and movers in GURGAON", "Packers and movers in GUWAHATI", "Packers and movers in GWALIOR",
    "Packers and movers in HALDWANI", "Packers and movers in HARIDWAR", "Packers and movers in HISAR", "Packers and movers in HUBLI",
    "Packers and movers in HYDERABAD", "Packers and movers in INDORE", "Packers and movers in JABALPUR", "Packers and movers in JAIPUR",
    "Packers and movers in JALANDHAR", "Packers and movers in JALGAON", "Packers and movers in JAMMU", "Packers and movers in JAMNAGAR",
    "Packers and movers in JAMSHEDPUR", "Packers and movers in JHANSI", "Packers and movers in JODHPUR", "Packers and movers in KADAPA",
    "Packers and movers in KAKINADA", "Packers and movers in KANPUR", "Packers and movers in KARNAL", "Packers and movers in KOLHAPUR",
    "Packers and movers in KOTA", "Packers and movers in KOTHAGUDEM", "Packers and movers in KOLKATA", "Packers and movers in KURNOOL",
    "Packers and movers in LUCKNOW", "Packers and movers in LUDHIANA", "Packers and movers in MADURAI", "Packers and movers in MANCHERIAL",
    "Packers and movers in MEERUT", "Packers and movers in MUMBAI", "Packers and movers in MYSURU", "Packers and movers in NAGPUR",
    "Packers and movers in NASHIK", "Packers and movers in JHANSI"
  ];

  return (
    <FooterContainer>
      <FooterWrapper>
        <TopSection>
          <ContactInfo>
            <h4>Contact us at</h4>
            <p>
              <a href="tel:+919879449900" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#eec921" strokeWidth="1.5"><path d="M22 16.92V17a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v.09"/><path d="M22 16.92a16 16 0 01-8 2.08 16 16 0 01-8-2.08"/><path d="M2 7V5a2 2 0 012-2h16a2 2 0 012 2v2"/></svg> (91) 98794 49900
              </a>
            </p>
            <p>
              <a href="tel:+919510722206" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#eec921" strokeWidth="1.5"><path d="M22 16.92V17a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v.09"/><path d="M22 16.92a16 16 0 01-8 2.08 16 16 0 01-8-2.08"/><path d="M2 7V5a2 2 0 012-2h16a2 2 0 012 2v2"/></svg> (91) 95107 22206
              </a>
            </p>
          </ContactInfo>
          <ContactInfo>
             <h4>Address</h4>
             <p>
               <a href="https://www.google.com/maps?q=261+Raj+Victoria+Pal+Gam,+Surat,+Gujarat,+India+395009" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                 <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#eec921" strokeWidth="1.5"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"/></svg> 261 Raj Victoria Pal Gam,<br/> Surat, Gujarat, India. 395009
               </a>
             </p>
          </ContactInfo>
          <ContactInfo>
            <h4>Working Hours</h4>
            <p><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#eec921" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 3"/></svg> Mon-Sat<br/> 09:00-21:00</p>
          </ContactInfo>
          <ContactInfo>
            <h4>Send your email at</h4>
            <a href="mailto:contact@induvalleypackers.com"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#eec921" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg> contact@induvalleypackers.com</a>
            <a href="mailto:packersinduvalley@gmail.com"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#eec921" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg> packersinduvalley@gmail.com</a>
          </ContactInfo>
        </TopSection>
        <LocationSection>
          <h4>SEARCH BY LOCATION</h4>
          <LocationGrid>
            {locations.map((location, index) => (
              <StyledLink
                key={index}
                href={`https://wa.me/916351623121?text=Hello%20i%20am%20interested%20in%20your%20movers%20and%20packers%20services`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {location}
              </StyledLink>
            ))}
          </LocationGrid>
        </LocationSection>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;