import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const moveRoad = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeOut} 0.5s ease-out forwards;
  animation-delay: 2s;
  overflow: hidden;
`;

const RoadWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Road = styled.div`
  position: absolute;
  bottom: 40px;
  width: 200%;
  height: 4px;
  background: repeating-linear-gradient(
    90deg,
    #eec921 0px,
    #eec921 20px,
    transparent 20px,
    transparent 40px
  );
  animation: ${moveRoad} 1s linear infinite;
`;

const LogoWrapper = styled.div`
  position: relative;
  z-index: 2;
  animation: ${bounce} 1s ease-in-out infinite;
`;

const LogoImage = styled.img`
  height: 120px;
  width: auto;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
`;

const DustParticles = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 20px;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: #eec921;
    border-radius: 50%;
    opacity: 0.6;
  }
  
  &::before {
    left: 20px;
    animation: ${bounce} 0.8s ease-in-out infinite;
  }
  
  &::after {
    right: 20px;
    animation: ${bounce} 0.8s ease-in-out infinite 0.2s;
  }
`;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <LoaderContainer>
      <RoadWrapper>
        <Road />
        <LogoWrapper>
          <LogoImage src="/images/logo-induvalley.png" alt="Indu Valley Logo" />
        </LogoWrapper>
        <DustParticles />
      </RoadWrapper>
    </LoaderContainer>
  );
};

export default Loader;