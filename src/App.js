import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero";
import Products from "./components/products";
import { ProductsData, ProductsDataTwo } from "./components/products/data";
import SideBar from "./components/SideBar";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <SideBar />
      <Hero />
      <Products Heading='Choose your favorite pizza here' data={ProductsData}/>
      <Features/>
      <Products Heading='Sweets for you' data={ProductsDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
