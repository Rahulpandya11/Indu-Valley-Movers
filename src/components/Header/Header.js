import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: rgba(255,255,255,0.95);
  color: #222;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const HeaderInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem 1.5rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -2px;
  color: #222;
  font-family: 'Montserrat', 'Arial', sans-serif;
  text-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

const Nav = styled.nav`
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 1.1rem;
  font-weight: 600;
`;

const NavLink = styled(Link)`
  color: #222;
  text-decoration: none;
  transition: all 0.3s ease;
  text-shadow: 0 2px 8px rgba(0,0,0,0.08);
  position: relative;
  
  &:hover {
    color: #eec921;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #eec921;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #222;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
  
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &:hover {
    color: #eec921;
  }
`;

const Dot = styled.span`
  font-size: 2rem;
  margin-right: 0.5rem;
  vertical-align: middle;
  color: #eec921;
`;

const MobileMenuOverlay = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  z-index: 1100;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 75vw;
  max-width: 320px;
  background: #fff;
  box-shadow: -2px 0 10px rgba(0,0,0,0.15);
  z-index: 1200;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);

  @media (min-width: 901px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 2rem;
  color: #222;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: color 0.3s;
  &:hover {
    color: #eec921;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>
          <LogoImage src="/images/logo-induvalley.png" alt="Indu Valley Logo" />
        </Logo>
        <Nav>
          <NavList>
            <NavItem><NavLink to="/">HOME</NavLink></NavItem>
            <NavItem><NavLink to="/about">ABOUT US</NavLink></NavItem>
            <NavItem><NavLink to="/services">OUR SERVICES</NavLink></NavItem>
            <NavItem><NavLink to="/clients">CLIENTS</NavLink></NavItem>
            <NavItem><NavLink to="/contact">CONTACT US</NavLink></NavItem>
            <NavItem><NavLink to="/price-calculator">PRICE CALCULATOR</NavLink></NavItem>
          </NavList>
        </Nav>
        <MenuButton onClick={() => setMenuOpen(true)}>
          <Dot>•</Dot>menu
        </MenuButton>
      </HeaderInner>
      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay open={menuOpen} onClick={() => setMenuOpen(false)} />
      {/* Mobile Menu */}
      <MobileMenu open={menuOpen}>
        <CloseButton onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</CloseButton>
        <MobileNavList>
          <NavItem><NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink></NavItem>
          <NavItem><NavLink to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</NavLink></NavItem>
          <NavItem><NavLink to="/services" onClick={() => setMenuOpen(false)}>OUR SERVICES</NavLink></NavItem>
          <NavItem><NavLink to="/clients" onClick={() => setMenuOpen(false)}>CLIENTS</NavLink></NavItem>
          <NavItem><NavLink to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</NavLink></NavItem>
          <NavItem><NavLink to="/price-calculator" onClick={() => setMenuOpen(false)}>PRICE CALCULATOR</NavLink></NavItem>
        </MobileNavList>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;