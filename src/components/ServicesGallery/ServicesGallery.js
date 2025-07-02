import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

const GalleryContainer = styled.div`
  overflow: hidden; /* Default for desktop */
  padding: 2rem 0; /* Default padding */
  position: relative;

  @media (max-width: 768px) {
    overflow-x: auto; /* Enable horizontal scrolling on mobile */
    overflow-y: hidden; /* Hide vertical scrollbar on mobile */
    padding: 0; /* Remove padding from container on mobile */

    /* Hide scrollbar for Chrome, Safari and Opera on mobile */
    &::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox on mobile */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const GalleryInner = styled.div`
  display: flex;
  transition: transform 0.8s ease-in-out; /* Re-add transform transition for desktop */

  @media (max-width: 768px) {
    padding: 2rem 0; /* Add padding to inner container on mobile */
    transition: none; /* Remove transform transition on mobile for scrollIntoView */
  }
`;

const GalleryItem = styled.div`
  flex: 0 0 auto;
  width: ${props => props.isActive ? '600px' : '300px'}; /* Active item wider for desktop */
  margin-right: 2rem; /* Space between items for desktop */
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: width 0.8s ease-in-out, margin-right 0.8s ease-in-out;
  overflow: hidden;

  @media (max-width: 768px) {
      width: ${props => props.isActive ? '90vw' : '65vw'}; /* Adjusted mobile width to show more of the next item */
      margin-right: 1rem; /* Reverted mobile margin */
  }
`;

const ItemImageWrapper = styled.div`
    width: 100%;
    height: ${props => props.isActive ? '400px' : '300px'}; /* Adjust image height with item */
    overflow: hidden;
    transition: height 0.5s ease-in-out;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ItemContent = styled.div`
  padding: 1.5rem;
  @media (max-width: 400px) {
    padding: 1rem 0.7rem;
  }
`;

const ItemTitle = styled.h3`
  //font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #fff;
  @media (max-width: 600px) {
    margin-top: 0.3rem;
    font-size: 1.3rem;
  }
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const ProgressContainer = styled.div`
    width: 100%;
    height: 4px;
    background-color: #333;
    margin-top: 2rem;
    border-radius: 2px;
    overflow: hidden;
`;

const ProgressBar = styled.div`
    height: 100%;
    background-color: #eec921; /* Theme color */
    width: ${props => props.progressWidth || '0%'};
    transition: width 0.5s ease-in-out;
`;

// Real data for the Our Services page
const servicesData = [
    { 
        title: 'Home Relocation', 
        description: 'Home Relocation',
        image: '/images/Home-relocation.png'
    },
    { 
        title: 'Packing & Moving', 
        description: 'Packing & Moving',
        image: '/images/Packing-and-moving.jpg'
    },
    { 
        title: 'Loading Unloading Service', 
        description: 'Loading Unloading Service',
        image: '/images/loading-unloading-services.jpg'
    },
    { 
        title: 'Office Relocation', 
        description: 'Office Relocation',
        image: '/images/Office-Relocation.png'
    },
    { 
        title: 'Vehicle Transport Service', 
        description: 'Vehicle Transport Service',
        image: '/images/Vehicle-transport-service.jpg'
    },
    { 
        title: 'Door To Door Delivery', 
        description: 'Door To Door Delivery',
        image: '/images/Door-to-door-delivery.jpg'
    },
    { 
        title: 'Goods Insurance', 
        description: 'Goods Insurance',
        image: '/images/Goods-Insurance.jpg'
    },
    { 
        title: 'All India Service', 
        description: 'All India Service',
        image: '/images/All-India-Services.jpg'
    },
    { 
        title: 'Air Cargo Service', 
        description: 'Air Cargo Service',
        image: '/images/Air-Cargo-Service.jpg'
    },
    { 
        title: 'International Shifting', 
        description: 'International Shifting',
        image: '/images/International-shifting.jpg'
    },
];

const ServicesGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryContainerRef = useRef(null); // Use container ref for measuring
  const galleryInnerRef = useRef(null); // Use inner ref for transform/scroll
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (galleryInnerRef.current && galleryContainerRef.current) {
      const activeItem = galleryInnerRef.current.children[activeIndex];
      if (activeItem) {
        if (isMobile) {
          // On mobile, use scrollIntoView
          galleryContainerRef.current.scrollLeft = activeItem.offsetLeft; // Use scrollLeft for horizontal scroll
          // Removed scrollIntoView as manual scrollLeft is used for better control
        } else {
          // On desktop, calculate transform translateX to center the active item
          const galleryContainerWidth = galleryContainerRef.current.offsetWidth; // Use container width
          const activeItemWidth = activeItem.offsetWidth;
          const activeItemOffsetLeft = activeItem.offsetLeft;

          // Calculate the scroll position to center the active item
          let scrollTo = activeItemOffsetLeft - (galleryContainerWidth / 2) + (activeItemWidth / 2);

          // Prevent scrolling too far left (past the beginning)
          scrollTo = Math.max(0, scrollTo);

          // Prevent scrolling too far right (past the end)
          const totalWidth = galleryInnerRef.current.scrollWidth;
          const maxScroll = totalWidth - galleryContainerWidth;
          scrollTo = Math.min(scrollTo, maxScroll);

          // Apply the transform
          galleryInnerRef.current.style.transform = `translateX(-${scrollTo}px)`;
        }
      }
    } else if (galleryInnerRef.current && !galleryContainerRef.current && !isMobile) {
         // Fallback for desktop if container ref is not available, though it should be
         const activeItem = galleryInnerRef.current.children[activeIndex];
         if (activeItem) {
            const galleryInnerWidth = galleryInnerRef.current.offsetWidth; // Use inner width as approximation
            const activeItemWidth = activeItem.offsetWidth;
            const activeItemOffsetLeft = activeItem.offsetLeft;
            let scrollTo = activeItemOffsetLeft - (galleryInnerWidth / 2) + (activeItemWidth / 2);
            scrollTo = Math.max(0, scrollTo);
             const totalWidth = galleryInnerRef.current.scrollWidth;
             const maxScroll = totalWidth - galleryInnerWidth;
            scrollTo = Math.min(scrollTo, maxScroll);
            galleryInnerRef.current.style.transform = `translateX(-${scrollTo}px)`;
         }
    }
  }, [activeIndex, isMobile, servicesData.length]); // Dependencies: activeIndex, isMobile, servicesData.length

  const handleItemClick = (index) => {
      setActiveIndex(index);
  };

  // Determine progress bar width based on active index
  const progressBarWidth = ((activeIndex + 1) / servicesData.length) * 100; // Keep this for desktop/mobile progress bar logic based on active index

  return (
    <GalleryContainer ref={galleryContainerRef}>{/* Attach container ref here */}
      <GalleryInner ref={galleryInnerRef}>{/* Attach inner ref here */}
        {servicesData.map((item, index) => (
          <GalleryItem 
            key={index} 
            isActive={index === activeIndex}
            onClick={() => handleItemClick(index)}
          >
             <ItemImageWrapper isActive={index === activeIndex}>
                <ItemImage src={item.image} alt={item.title} />
             </ItemImageWrapper>
            <ItemContent>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemContent>
          </GalleryItem>
        ))
        }
      </GalleryInner>
       <ProgressContainer>
            <ProgressBar progressWidth={`${progressBarWidth}%`} />{/* Use calculated width */}
       </ProgressContainer>
    </GalleryContainer>
  );
};

export default ServicesGallery;