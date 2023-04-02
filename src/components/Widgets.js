import React from "react";
import styled from "styled-components";
import { MdMonetizationOn } from "react-icons/md";
import { AiOutlineShoppingCart,AiOutlineFolderView } from "react-icons/ai";
import { HiArrowTrendingUp } from "react-icons/hi2";

const Widgets = () => {
  return (
    <Wrapper>
      <div className="widgets">
        <div className="container">
          <div className="widget">
            <div>
              <h3>956</h3>
              <p>Daily Views</p>
            </div>
            <span className="icon">
              <AiOutlineFolderView />
            </span>
          </div>
          <div className="widget">
            <div>
              <h3>$46598</h3>
              <p>Earning</p>
            </div>
            <span className="icon">
              <MdMonetizationOn />
            </span>
          </div>
          <div className="widget">
            <div>
              <h3>198</h3>
              <p>Sales</p>
            </div>
            <span className="icon">
              <AiOutlineShoppingCart />
            </span>
          </div>

          <div className="widget">
            <div>
              <h3>23%</h3>
              <p>New Customers</p>
            </div>
            <span className="icon">
              <HiArrowTrendingUp />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .widgets {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .container {
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
  }
  .widget {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    color: #6b068a;
    background: var(--forthColor);
    box-shadow: 0 0 5px black;
    border-radius: 4px;
  }
  .icon {
    font-size: 30px;
   
  }
 
`;

export default Widgets;
