import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {

return (

    <NavBarContainer>
        <SiteHeading>CO2 CALCULATOR</SiteHeading>
          {/* <Lottie options={defaultOptions} height={200} width={200} /> */}
        <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/improvements">Improvements</Link>
        <Link to="/table">Table</Link>
        </NavLinks>
    </NavBarContainer>
);
}

export default NavBar;


const NavBarContainer = styled.nav`
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-color: #0A1128;
  border-bottom: solid black 3px;

`
const NavLinks = styled.ul`
  color: white;
  list-style-type: none;
`

const SiteHeading = styled.h1`
  color: white ;
  letter-spacing: 3px;
  font-family: 'Covered By Your Grace';
  font-family: 'Rubik Dirt';
`
// const Link = styled.li`
//   display: inline;
//   margin-right: 10px;
//   font-weight: bold;

// `