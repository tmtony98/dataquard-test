import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
import ProductList from "./components/ProductList"
import ProductPage from "./components/ProductPage"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>}>
          <Route path="list" element={<ProductList/>} />
          <Route path="product" element={<ProductPage/>} />
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

