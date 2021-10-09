import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobarStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
// import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="কি চা খাবেন?" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
      {/* <Cart /> */}
    </Router>
  );
}

export default App;
