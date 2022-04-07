import React from "react";
import { AiOutlineDashboard, AiOutlineLogout } from "react-icons/ai";
import { BsCardChecklist, BsChevronDoubleLeft } from "react-icons/bs";
import { FaGripfire } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Asidebar = () => {
  const navigate = useNavigate();
  return (
    <AsideContainer>
      <div className="aside-header">
        <div onClick={() => navigate("/")} className="back-btn cursor-pointer">
          <BsChevronDoubleLeft />
          <span>Back</span>
        </div>
        <span>
          LogOut <AiOutlineLogout />
        </span>
      </div>
      <div className="logo">
        <FaGripfire />
        Auth
      </div>
      <menu>
        <ul>
          <li>
            <NavLink to="/dashboard/overview">
              <AiOutlineDashboard />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/create-post">
              <FiEdit />
              Create Post
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/post-lists">
              <BsCardChecklist />
              Post List
            </NavLink>
          </li>
        </ul>
      </menu>
      <Profile>
        <div className="img">
          <img
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            alt=""
          />
        </div>
        <div className="details">
          <h3>Ashik Mahmud</h3>
          <small>ashik@gmail.com</small>
        </div>
      </Profile>
    </AsideContainer>
  );
};
const AsideContainer = styled.aside`
  position: relative;
  .aside-header {
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    color: var(--accent-color);
    margin-bottom: 1rem;
    span {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }
  .back-btn {
    position: relative;
    color: var(--accent-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .logo {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 2rem;
    color: var(--accent-color);
    padding: 0rem 1rem;
  }
  menu {
    position: relative;
    margin-top: 1rem;
    ul {
      position: relative;
      li {
        cursor: pointer;
        a {
          padding: 1rem 2rem;
          color: var(--accent-color);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          &:hover {
            background-color: #263957;
          }
        }
        a.active {
          background-color: #263957;
        }
      }
    }
  }
`;

const Profile = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.4rem;
  .img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--accent-color);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .details {
    color: var(--accent-color);
  }
`;
export default Asidebar;
