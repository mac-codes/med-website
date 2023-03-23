import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  background-color: aliceblue;
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

const NavLink = styled.a`
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
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about">About</NavLink></li>
        <li><NavLink href="/services">Services</NavLink></li>
        <li><NavLink href="/blog">Blog</NavLink></li>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;