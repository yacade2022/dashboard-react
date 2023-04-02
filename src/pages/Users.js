import React from "react";
import styled from "styled-components";
import { useCustomerContext } from "../context/customerContext";
import Loading from "./Loading";
import { MdDeleteForever } from "react-icons/md";

const Users = () => {
  const { isLoading, customers, deleteUser } = useCustomerContext();
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="users">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>firstName</th>
                <th>gender</th>
                <th>age</th>
                <th>city</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => {
                const { id, firstName, gender, age } = customer;
                const { city } = customer.address;
                return (
                  <tr key={id} className="tr-body">
                    <td>{id}</td>
                    <td>{firstName}</td>
                    <td>{gender}</td>
                    <td>{age}</td>
                    <td>{city}</td>
                    <td className="delete" onClick={() => deleteUser(id)}>
                      <MdDeleteForever />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .users {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .container {
    width: 90vw;
  }
  .table {
    width: 100%;
    text-align: center;
    border-spacing: 0;
    border: 1px solid #6b068a;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  thead tr {
    background: #6b068a;
  }
  thead th {
    color: var(--forthColor);
  }
  th,
  td {
    padding: 10px 0;
    user-select: none;
    color: #6b068a;
  }

  .tr-body:hover {
    background: #3c8dbc;
  }
  .tr-body:hover td {
    color: var(--forthColor);
  }
  .delete {
    cursor: pointer;
    font-size: 22px;
  }
  @media (max-width: 287px) {
    th,
    td {
      font-size: 12px;
    }
    .delete {
      font-size: 16px;
    }
  }
`;

export default Users;
