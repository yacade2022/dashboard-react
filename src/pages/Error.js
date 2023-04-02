import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Oops!</h1>
        <h3>404-PAGE NOT FOUND</h3>
        <p>something went wrong</p>
        <Link to="/" className="link">
          Go Back
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .container {
    width: 90vw;
    text-align: center;
    margin-top: 30px;
  }
  .container h1 {
    font-size: 50px;
    margin-bottom: 10px;
    color: #6b068a;
  }
  .container h3 {
    font-size: 25px;
    color: #6b068a;
  }
  .container p {
    font-size: 20px;
    margin-bottom: 15px;
    color: #6b068a;
  }
  .link {
    color: var(--forthColor);
    background: #3c8dbc;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none;
  }
`;
export default Error;
