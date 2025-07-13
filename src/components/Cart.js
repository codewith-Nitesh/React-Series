import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromcart } from "../store/counterSlice";
import { clearCartItem } from "../store/counterSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearCartItem());
  };
  return (
    <div style={{ padding: "2rem" }}>
      <h1>this is the cart item</h1>
      <span>cart -({cartItems.length})</span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>My cart Collection</div>
        <div>
          <button
            style={{
              padding: "0.5rem",
              fontWeight: "0.2rem",
              backgroundColor: "gray",
              borderRadius: "0.2rem",
            }}
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              height: "700px",
              width: "400px",
              border: "1px solid black",
              padding: "2rem",
              borderRadius: "1rem",
              margin: "1rem",
            }}
          >
            <div>
              <img
                className="img"
                src={item.image}
                alt="photo"
                style={{ height: "300px", width: "250px" }}
              />
              <h1>{item.title}</h1>
              <p>{item.id}</p>
              <span>price : {item.price}</span>
              <p>{item.category}</p>
              <p>{item.rating.rate}</p>
              <p>{item.description}</p>
              <button
                style={{
                  padding: "1rem",
                  fontWeight: "bold",
                  borderRadius: "1rem",
                  backgroundColor: "gray",
                }}
              >
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
