import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Nav = styled.div`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Hamburger = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 206px;
  height: 101px;
  margin-left: 20px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuLink = styled.a`
  padding: 1rem 3rem;
  cursor: pointer;
  text-align: center;
  font-weight: 600;

  &:hover {
      color: ${props => props.theme.colors.primary};
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo src={logo} />
      <Hamburger>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu>
        <MenuLink>Home</MenuLink>
        <MenuLink>Product</MenuLink>
        <MenuLink>Faq</MenuLink>
        <MenuLink>Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Header;
