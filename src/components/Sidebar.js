import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes, FaShoppingBag } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsBarChartFill } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { useGlobalContext } from "../context/productContext";

const Sidebar = () => {
  const { closeSideBar, isSideBarOpen } = useGlobalContext();
  return (
    <Wrapper>
      <div className={`${isSideBarOpen ? "sidebar open" : "sidebar"}`}>
        <div className="container">
          <header className="header">
            <h2>Yacade22</h2>
            <span className="icon" onClick={() => closeSideBar()}>
              <FaTimes />
            </span>
          </header>
          <div className="list-container">
            <ul>
              <li>
                <Link to="/" className="icon">
                    <MdOutlineDashboard />                  
                  <span>dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="icon">
                  <FaShoppingBag />
                  <span>products</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="icon">
                  <FiUsers />
                  <span>customers</span>
                </Link>
              </li>

              <li>
                <Link to="/bar" className="icon">
                  <BsBarChartFill />
                  <span>Bar Chart</span>
                </Link>
              </li>
              <li>
                <Link to="/pie" className="icon">
                  <AiOutlinePieChart />
                  <span>pie Chart</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    width: 70vw;
    height: 100vh;
    background-color: var(--secondaryColor);
    display: flex;
    justify-content: center;
    transform: translateX(-100%);
    transition: 0.3s;
    z-index: 10;
  }
  .open {
    transform: translateX(0);
  }

  .container {
    width: 90%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 20px;
  }
  .header .icon {
    display: grid;
    place-items: center;
    font-size: 22px;
    cursor: pointer;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  li .icon {
    font-size: 24px;
    text-decoration: none;
    color: var(--forthColor);
  }
  li span {
    font-size: 25px;
    font-weight: 400;
    margin-left: 5px;
    color: var(--forthColor);
  }
  @media (min-width: 638px) {
    .sidebar {
      width: 30vw;
    }
  }
`;
export default Sidebar;
