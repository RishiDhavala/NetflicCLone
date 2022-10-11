import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Netflix from "../pages/Netflix";

const Navbar = ({ isScrolled }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "MY List", link: "/mylist" },
  ];
  return (
    <Container>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="logo" />
          </div>
          <ul className="links flex">
            {links.map((name, Link) => {
              return (
                <li key={name}>
                  <Link to={Link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div``;
export default Navbar;
