import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FaGripfire } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../App";
import { auth } from "../Firebase/Firebase.config";
const Header = () => {
  const { isAuth, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOutUser = () => {
    signOut(auth).then(() => {
      toast.success("Log Out successfully!");
      navigate("/login");
    });
  };

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
                {isAuth ? (
                  <button
                    onClick={() => navigate("/dashboard/overview")}
                    className="btn"
                  >
                    Dashboard
                  </button>
                ) : (
                  <button onClick={() => navigate("/login")} className="btn">
                    Login
                  </button>
                )}
              </li>
              {isAuth && (
                <>
                  <li className="display-name">
                    <BiUser /> {user?.displayName}
                  </li>
                  <li
                    onClick={handleLogOutUser}
                    className="cursor-pointer display-name color-danger"
                  >
                    <AiOutlineLogout /> Log out
                  </li>
                </>
              )}
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
    .display-name {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
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
