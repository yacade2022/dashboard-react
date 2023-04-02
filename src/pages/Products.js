import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/productContext";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Rating from "./Rating";

const Products = () => {
  const {
    isLoading,
    filterProducts,
    filter_Products,
    category,
    sortProducts,
    sort,
  } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="container">
        <div className="all-products">
          <div className="form-container">
            <form className="form">
              <p>filter by</p>
              <select
                name="category"
                value={category}
                onChange={filterProducts}
                className="select"
              >
                <option value="all">all</option>
                <option value="smartphones">smarphones</option>
                <option value="laptops">laptops</option>
              </select>
            </form>

            <form className="form">
              <p>sort by</p>
              <select
                name="sort"
                value={sort}
                onChange={sortProducts}
                className="select"
              >
                <option value="price-lowest">price-lowest</option>
                <option value="price-highest">price-highest</option>
              </select>
            </form>
          </div>
          <div className="products">
            {filter_Products.map((product) => {
              const {
                id,
                title,
                category,
                brand,
                price,
                rating,
                thumbnail: image,
              } = product;
              return (
                <article key={id} className="article">
                  <div className="image">
                    <img src={image} alt={title} className="img" />
                  </div>
                  <div className="info">
                    <div>
                      <p>{title}</p>
                      <p>${price}</p>
                    </div>
                    <p>{brand}</p>
                    <p>{category}</p>
                    <span>
                      <Rating rating={rating} />
                    </span>
                    <div>
                      <Link to={`/products/${id}`} className="details">
                        Details
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .all-products {
    width: 90vw;
    margin-bottom: 20px;
  }
  .form-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .form {
    display: flex;
    align-items: center;
  }
  .form p {
    margin-right: 4px;
    color: var(--thirdColor);
  }
  .select {
    outline: none;
    border: 1px solid #942db3;
    border-radius: 2px;
    color: #942db3;
  }
  option {
    color: #942db3;
  }
  .products {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    place-items: center;
  }
  .article {
    width: 100%;
    box-shadow: 0 0 10px #3c8dbc;
    border-radius: 8px;
  }
  .img {
    width: 100%;
    height: 180px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .info {
    padding: 5px;
    background: #fff;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .info > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info p {
    color: #942db3;
  }
  .details {
    width: 110px;
    margin: 0 auto;
    padding: 2px 0;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    color: var(--forthColor);
    background: #3c8dbc;
  }
  @media (max-width: 287px) {
    .form-container {
      flex-direction: column;
    }
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
      gap: 20px;
    }
  }
`;
export default Products;
