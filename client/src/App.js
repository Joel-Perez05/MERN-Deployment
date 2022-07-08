import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import Update from './components/Update';
// import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Main />} path="/home" />
          <Route element={<ProductDetails />} path="/products/:id" />
          <Route element={<Update />} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
