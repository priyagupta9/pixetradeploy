import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Otp from "./OtpPage/Otp";
import Product from "./ProductsPage/Product"
import ProductFlow from './ProductFlowP1Page/ProductFlow';
import LoginInfo from "./LoginInfoPage/LoginInfo"
import LoginScreen from "./LoginScreenPage/LoginScreen"
import Error from './Error';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/login' element={<LoginInfo />} />
        <Route path='/otplogin' element={<Otp />} />
        <Route path='/pixetra' />
        <Route path='/products' element={<Product />} />
        <Route path='/product-name' element={<ProductFlow />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    {/* <LoginScreen />
    <LoginInfo />
    <Otp />
    <Product />
    <ProductFlow /> */}
    </div>
  );
}

export default App;
