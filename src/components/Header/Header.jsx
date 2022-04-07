import React from "react";
import { FaGripfire } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div className="container">
        <NavBar>
          <div className="logo colorize">
            <FaGripfire />
            Auth
          </div>
          <menu>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/articles">Articles</NavLink>
              </li>
              <li>
                <button onClick={() => navigate("/login")} className="btn">
                  Login
                </button>
              </li>
            </ul>
          </menu>
        </NavBar>
      </div>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  background-color: #f8f8f8;
`;
const NavBar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
  .logo {
    font-size: 1.1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  ul {
    display: flex;
    align-items: center;
    position: relative;
    gap: 2rem;
    a:not(.btn) {
      color: var(--secondary-color);
      font-size: 1rem;
      font-weight: bold;
    }
    a.active {
      color: var(--main-color);
    }
  }
`;

export default Header;
