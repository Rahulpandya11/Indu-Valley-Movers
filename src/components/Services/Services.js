import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import './Services.css';

const entranceAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px) rotateX(-20deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg) scale(1);
  }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ServicesContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #ffffff 0%, #f0f2f5 100%);
  overflow: hidden;
`;

const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 4rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #eec921;
    border-radius: 2px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  perspective: 1000px;
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform: translateY(60px) rotateX(-20deg) scale(0.9);
  transform-style: preserve-3d;

  ${props => props.$isVisible && css`
    animation: ${entranceAnimation} 0.8s ease-out forwards;
    animation-delay: ${props.$index * 0.15}s;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, transparent, #eec921, transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease-out;
  }

  &:hover {
    transform: translateY(-15px) rotateX(0deg) scale(1.03);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ServiceIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: #eec92133;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  svg {
    width: 45px;
    height: 45px;
    stroke: #eec921;
    stroke-width: 1.8;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  ${ServiceCard}:hover & {
    background-color: #eec921;
    transform: rotate(360deg) scale(1.2);
    svg {
        stroke: #1a253b;
    }
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 3px;
    background: #eec921;
    transition: width 0.4s ease-out;
  }

  ${ServiceCard}:hover &::after {
    width: 100%;
  }
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: #555;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '→';
    color: #eec921;
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const services = [
  {
    title: 'DOOR TO DOOR DELIVERY',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M9 22V12h6v10"/></svg>
    ),
    description: "Seamless door-to-door delivery ensuring your goods reach their destination safely and on time."
  },
  {
    title: 'HOUSE HOLD GOODS',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><path d="M12.89 6.89l-1.78 1.78 1.78 1.78"/><path d="M15 13l-2 2-2-2"/><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h.01M17 10h.01"/></svg>
    ),
    description: "Careful and secure transportation of your household belongings with expert packing and handling."
  },
  {
    title: 'LOCAL, DOMESTICS & INTERNATIONAL',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10V2"/><path d="M4.93 19.07A10 10 0 012 12M19.07 4.93A10 10 0 0022 12"/></svg>
    ),
    description: "Comprehensive moving services covering local, domestic, and international destinations."
  },
  {
    title: 'TRANSPORTATION',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><path d="M1 3h15v14H1V3z"/><path d="M15 17h5l4 4H15"/><path d="M6 17v3"/><circle cx="6" cy="13" r="2"/></svg>
    ),
    description: "Reliable and efficient transportation solutions for various types of goods and cargo."
  },
  {
    title: 'OFFICE MOVING',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><path d="M2 16.9V6.59A2 2 0 013.59 5h.82A2 2 0 016 6.59V16.9m0 0H22m-16 0V7a2 2 0 012-2h3.9a2 2 0 012 2v9.9m0 0H22m0 0a2 2 0 012 2v.1a2 2 0 01-2 2H2a2 2 0 01-2-2v-.1a2 2 0 012-2h20z"/></svg>
    ),
    description: "Streamlined and organized office relocation services to minimize downtime and disruption."
  },
  {
    title: 'VEHICLE TRANSPORTATION',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><path d="M1 17h22v-3H1v3z"/><path d="M16 17v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3"/><path d="M12 17V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12"/><circle cx="6" cy="13" r="2"/><circle cx="18" cy="13" r="2"/></svg>
    ),
    description: "Safe and secure transportation of vehicles to any destination, domestic or international."
  },
  {
    title: 'PACKING, MOVING',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M12 6v13"/></svg>
    ),
    description: "Professional packing and moving services tailored to your specific needs, ensuring maximum care for your possessions."
  },
  {
    title: 'LOADING/UNLOADING',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><path d="M5 8h14l2 8H3l2-8z"/><path d="M10 20h4"/><path d="M12 20V8"/></svg>
    ),
    description: "Efficient and careful loading and unloading services to ensure the safety of your goods during transit."
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleCards(prev => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (sectionRef.current) {
      Array.from(sectionRef.current.children).forEach((item, index) => {
        item.dataset.index = index;
        observer.observe(item);
      });
    }

    return () => {
      if (sectionRef.current) {
         Array.from(sectionRef.current.children).forEach(item => {
          observer.unobserve(item);
        });
      }
      observer.disconnect();
    };
  }, []);

  return (
    <ServicesContainer>
      <ServicesWrapper>
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid ref={sectionRef}>
          {services.map((service, idx) => (
            <ServiceCard key={idx} $isVisible={visibleCards[idx]} $index={idx}>
              <ServiceIconWrapper>
                {service.icon}
              </ServiceIconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;