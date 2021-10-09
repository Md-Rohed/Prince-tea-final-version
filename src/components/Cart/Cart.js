import React from "react";

export default function Cart(props) {
  const newCart = props.cart;
  //   const TeaPrice = newCart.reduce((sum, tea) => sum + tea.price, 0);

  return (
    <div>
      <h1> total order{console.log(newCart)}</h1>
    </div>
  );
}
