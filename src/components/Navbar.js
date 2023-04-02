import React from "react";
import styled from "styled-components";
import { FaSearch, FaBars } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { useGlobalContext } from "../context/productContext";

const Navbar = () => {
  const { openSideBar, changeTheme } = useGlobalContext();
  return (
    <Wrapper>
      <div className="container">
        <nav className="nav-container">
          <div className="nav-one">
            <span className="bars" onClick={() => openSideBar()}>
              <FaBars />
            </span>
            <form className="form">
              <input type="text" />
              <span>
                <FaSearch />
              </span>
            </form>
          </div>
          <div>
            <span className="icon moon" onClick={() => changeTheme()}>
              <FiMoon />
            </span>
            <span className="icon ">
              <BiMessageRounded />
              <span className="message">5</span>
            </span>
            <span className="icon ">
              <MdNotificationsNone />
              <span className="notification">3</span>
            </span>
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .container {
    height: 60px;
    background-color: var(--secondaryColor);
    display: flex;
    justify-content: center;
  }

  .nav-container {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-one {
    display: flex;
    align-items: center;
  }
  .nav-one .bars {
    margin-right: 10px;
    font-size: 18px;
    cursor: pointer;
  }
  .form {
    border: 1px solid #6b068a;
    border-radius: 2px;
  }
  .form input {
    border: none;
    outline: none;
    margin-right: 5px;
    background: transparent;
    color: var(--forthColor);
  }

  .icon {
    font-size: 28px;
    margin-left: 5px;
    cursor: pointer;
    text-align: center;
    position: relative;
  }
  .message,
  .notification {
    position: absolute;
    top: -2px;
    right: 1px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: red;
    color: white;
    font-size: 12px;
  }
  @media (max-width: 767px) {
    .form {
      width: 130px;
      height: 21px;
      position: relative;
    }
    .form span {
      position: absolute;
      right: 0;
      top: 2px;
    }
    .icon {
      font-size: 20px;
    }
    .message,
    .notification {
      width: 12px;
      height: 12px;
      font-size: 10px;
    }
  }
`;
export default Navbar;
