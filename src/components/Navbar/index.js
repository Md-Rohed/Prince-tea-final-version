import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavIcon onClick={toggle}>
          <p>চা</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
