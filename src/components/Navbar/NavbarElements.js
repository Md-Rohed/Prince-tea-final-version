import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaCoffee)`
  font-size: 2rem;
  transform: translate(-10%, -15%);
`;
