import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StatsContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 2rem;

  @media (max-width: 600px) {
    gap: 2rem;
  }
`;

const StatItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(50px);
  
  ${props => props.$isVisible && css`
    animation: ${fadeInUp} 0.8s ease-out forwards;
    animation-delay: ${props.$index * 0.15}s;
  `}
`;

const StatIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: #eec921;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  svg {
    width: 40px;
    height: 40px;
    stroke: #222;
    stroke-width: 1.5;
  }
`;

const StatValue = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const stats = [
  {
    value: 8042,
    label: 'CLIENTS TRUST IN US',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><path d="M14 10l-2 2-2-2M10 14h4v4h-4z"/><path d="M18.36 19.36A9 9 0 005.64 6.64M19.78 2.22L17.66 4.34M6.34 17.66L4.22 19.78M3 12H1M12 3V1M21 12h-2M12 21v-2"/></svg>
    ),
  },
  {
    value: 10932,
    label: 'KM FOR YEAR',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><rect x="1" y="7" width="22" height="13" rx="2"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="16.5" cy="18.5" r="1.5"/></svg>
    ),
  },
  {
    value: 5721,
    label: 'TONS OF GOODS',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><path d="M1 11v10h22V11M14 11l-2 6-2-6M3 11h18"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    ),
  },
  {
    value: 689,
    label: 'HELD SHARES',
    icon: (
      <svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8a4 4 0 00-4 4"/><path d="M12 16a4 4 0 004-4"/><path d="M16.24 7.76l-2.12 2.12M10.34 13.66l-2.12 2.12"/></svg>
    ),
  },
];

const StatItem = ({ stat, index, isVisible }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const start = 0;
    const end = stat.value;
    const duration = 1500; // Animation duration in milliseconds
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentValue = Math.min(end, start + (end - start) * (progress / duration));
      setAnimatedValue(Math.round(currentValue));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

  }, [isVisible, stat.value]);

  return (
    <StatItemWrapper $isVisible={isVisible} $index={index}>
      <StatIcon>{stat.icon}</StatIcon>
      <StatValue>{animatedValue}</StatValue>
      <StatLabel>{stat.label}</StatLabel>
    </StatItemWrapper>
  );
};

const StatsSection = () => {
  const [visibleStats, setVisibleStats] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleStats(prev => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
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
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <StatsContainer>
      <StatsGrid ref={sectionRef}>
        {stats.map((stat, index) => (
          <StatItem key={index} index={index} stat={stat} isVisible={visibleStats[index]} />
        ))
        }
      </StatsGrid>
    </StatsContainer>
  );
};

export default StatsSection; 