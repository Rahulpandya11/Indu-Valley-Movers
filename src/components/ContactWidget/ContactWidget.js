import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const floatIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const WidgetContainer = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.7rem;
`;

const FloatingButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: ${props => props.bg || '#eec921'};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.13);
  cursor: pointer;
  margin-bottom: 0.2rem;
  position: relative;
  transition: background 0.2s, transform 0.2s;
  outline: none;
  &:hover {
    background: ${props => props.hoverbg || '#ffd700'};
    transform: scale(1.07);
  }
  animation: ${floatIn} 0.4s cubic-bezier(.39,.575,.565,1) both;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.7rem;
  margin-bottom: 0.2rem;
`;

const ContactWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <WidgetContainer>
      {!open && (
        <>
          <FloatingButton
            bg="#eec921"
            hoverbg="#ffd700"
            aria-label="Contact Us"
            onClick={() => setOpen(true)}
          >
            <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          </FloatingButton>
        </>
      )}
      {open && (
        <ButtonsWrapper>
          <FloatingButton
            bg="#f15a24"
            hoverbg="#ff7f50"
            aria-label="Call Us"
            style={{ animationDelay: '0.1s' }}
            onClick={() => window.open('tel:+919510722206', '_self')}
          >
            <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V17a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v.09"/><path d="M22 16.92a16 16 0 01-8 2.08 16 16 0 01-8-2.08"/><path d="M2 7V5a2 2 0 012-2h16a2 2 0 012 2v2"/></svg>
          </FloatingButton>
          <FloatingButton
            bg="#4285F4"
            hoverbg="#5a95f5"
            aria-label="Email Us"
            style={{ animationDelay: '0.15s' }}
            onClick={() => window.open('mailto:contact@induvalleypackers.com', '_self')}
          >
            <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>
          </FloatingButton>
          <FloatingButton
            bg="#25d366"
            hoverbg="#34e07a"
            aria-label="WhatsApp"
            style={{ animationDelay: '0.2s' }}
            onClick={() => window.open('https://wa.me/919510722206', '_blank')}
          >
            <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.13 1.6 5.92L0 24l6.18-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52z"/><path d="M17.47 14.37c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1.01-1 2.46 0 1.45 1.03 2.85 1.18 3.05.14.19 2.03 3.1 4.93 4.23.69.28 1.23.45 1.65.58.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z"/></svg>
          </FloatingButton>
          <FloatingButton
            bg="#eec921"
            hoverbg="#ffd700"
            aria-label="Close"
            style={{ animationDelay: '0.3s' }}
            onClick={() => setOpen(false)}
          >
            <svg width="26" height="26" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </FloatingButton>
        </ButtonsWrapper>
      )}
    </WidgetContainer>
  );
};

export default ContactWidget;