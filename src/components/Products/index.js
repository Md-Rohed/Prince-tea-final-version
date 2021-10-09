import React from "react";
import { useState } from "react";
// import Cart from "../Cart/Cart";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data }) => {
  const [cart, setcart] = useState([]);

  const handler = (product) => {
    const newCart = [...cart, product];
    setcart(newCart);
    // console.log(newCart);
  };
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton onClick={() => handler(product)}>
                  Add to cart
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
      {/* <Cart cart={cart} /> */}
    </ProductsContainer>
  );
};

export default Products;
