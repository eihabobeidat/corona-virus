import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
          <Route path="/Posts" element={<Posts name="Eihab" />} />
          <Route path="/Posts/:year" element={<Posts name="Eihab" />} />
          <Route path="/Posts/:year/:month" element={<Posts name="Eihab" />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
