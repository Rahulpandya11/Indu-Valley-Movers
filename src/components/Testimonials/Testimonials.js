import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f8f8;
  position: relative;
`;

const TestimonialsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  opacity: ${props => props.active ? 1 : 0};
  transform: translateY(${props => props.active ? '0' : '20px'});
  transition: all 0.5s ease;
  width: 100%;
  position: ${props => props.active ? 'relative' : 'absolute'};
  z-index: ${props => props.active ? 1 : 0};
  display: ${props => props.active ? 'block' : 'none'};
`;

const Quote = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 2rem;
  font-style: italic;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  color: #222;
  margin: 0;
`;

const AuthorTitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#eec921' : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #eec921;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #eec921;
  }
`;

const CardContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 2.5rem;
  min-height: 300px;
  height: auto;
`;

const testimonials = [
  {
    quote: `⭐️⭐️⭐️⭐️⭐️\n"I recently moved from Mumbai to Pune with Indus Valley Movers & Packers and couldn't be happier with the entire experience. From the moment I called for a quote, their customer-service team was responsive, transparent, and patient—answering every question I had about packing materials, transit insurance, and delivery timelines. On moving day, the crew arrived punctually, neatly uniformed, and equipped with high-quality bubble wrap, sturdy cartons, and protective furniture covers. They meticulously labeled every box and disassembled & reassembled my bedframe and glass-top dining table without a scratch. Best of all, my belongings arrived in perfect condition two days later—right on schedule. Pricing was competitive, and there were no hidden fees or last-minute upcharges. If you need reliable, professional movers who treat your possessions like their own, Indus Valley is the company to trust!"`,
    author: "Rahul Pandya",
    title: "",
    image: "/images/testimonials/person1.jpg"
  },
  {
    quote: `⭐️⭐️⭐️⭐️⭐️\n"Indus Valley Movers & Packers made our interstate move surprisingly stress-free. After a quick online booking, they sent an experienced surveyor to assess our 3-BHK apartment and recommend the exact number of crates and blankets required. On packing day, the team worked efficiently—wrapping fragile items in foam, shrink-wrapping sofas, and securing wardrobes with custom covers. Their attention to detail impressed me: they placed heavy books in small boxes (to avoid overloading) and fragile décor on top with extra padding. During transit, I received GPS updates and an expected-arrival window. Delivery was seamless: the same crew unboxed and positioned furniture according to our floor plan. Their rates were fair, and they offer flexible payment options. Highly recommend Indus Valley for anyone looking for a hassle-free, professional moving service!"`,
    author: "Manav Vandra",
    title: "",
    image: "/images/testimonials/person2.jpg"
  },
  {
    quote: `⭐️⭐️⭐️⭐️⭐️\n"I hired Indus Valley Movers & Packers for a short-distance move within Bangalore, and they exceeded all expectations. Booking was a breeze via their mobile app—I selected my move date, chose add-ons (like TV mounting and appliance handling), and paid a small deposit online. On moving day, their team checked in via WhatsApp to confirm arrival time. They arrived early, wearing branded t-shirts, and immediately got to work. Their packers used eco-friendly, tear-resistant materials and padded every piece of furniture. They even wrapped my large mirror in a wooden crate for extra security. I appreciated their polite, courteous attitude—they solicited my feedback at every step and took extra care with high-value items. The job was completed in under four hours, and there were zero damages. After delivery, they followed up to ensure everything was to my satisfaction. Exceptional service—and great peace of mind. Would definitely call them again!"`,
    author: "Jesal Thakkar",
    title: "",
    image: "/images/testimonials/person3.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleDotClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <TestimonialsContainer
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <TestimonialsWrapper>
        <SectionTitle>What Our Clients Say</SectionTitle>
        <CardContainer>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} active={index === activeIndex}>
              <Quote>"{testimonial.quote}"</Quote>
              <AuthorInfo>
                <AuthorImage src={testimonial.image} alt={testimonial.author} />
                <AuthorDetails>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorTitle>{testimonial.title}</AuthorTitle>
                </AuthorDetails>
              </AuthorInfo>
            </TestimonialCard>
          ))}
        </CardContainer>
        <NavigationDots>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              active={index === activeIndex}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </NavigationDots>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;