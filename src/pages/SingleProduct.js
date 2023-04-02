import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/productContext";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Rating from "./Rating";

const url = "https://dummyjson.com/products";

const SingleProduct = () => {
  const { isSingleLoading, fetchSingleProduct, singleProduct } =
    useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`);
  }, []);
  const {
    title,
    category,
    description,
    thumbnail: image,
    price,
    rating,
    stock,
  } = singleProduct;
  if (isSingleLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="single-product">
        <div className="container">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div>
            <h2>{title}</h2>
            <h4> category : {category}</h4>
            <Rating rating={rating} />
            <p>{description}</p>
            <p>price : $ {price}</p>
            <p>stock : {stock}</p>

            <Link to="/products" className="details">
              back to products
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .single-product {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .container {
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 0 10px #3c8dbc;
  }
  @media (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }
  h2 {
    color: #942db3;
  }
  h4 {
    text-transform: capitalize;
    margin-bottom: 10px;
    color: #942db3;
  }
  p {
    margin: 10px 0;
    color: #942db3;
  }
  .details {
    width: 110px;
    padding: 6px;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    color: var(--forthColor);
    background: #3c8dbc;
  }
`;
export default SingleProduct;
