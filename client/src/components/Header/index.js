import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  background-color: #f2f2f2;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.img`
  height: 60px;
  margin-bottom: 16px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  font-family: 'Phudu', cursive;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-weight: 500;
  font-size: 16px;
  margin: 0 16px;
  &:hover {
    color: #0077cc;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png" alt="Company Logo" />
      <NavLinks>
        <li><NavLinkStyled exact to="/">Home</NavLinkStyled></li>
        <li><NavLinkStyled to="/about">About</NavLinkStyled></li>
        <li><NavLinkStyled to="/services">Services</NavLinkStyled></li>
        <li><NavLinkStyled to="/contact">Contact Us</NavLinkStyled></li>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;