import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import SingleProduct from "./pages/SingleProduct";
import Pie from "./Chart/Pie";
import Bar from "./Chart/Bar";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
function App() {
  return (
    <BrowserRouter basename='dashboard-react' >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
