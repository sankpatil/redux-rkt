import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItem,
  decreaseQuantity,
  increaseQuantity,
  removeItem
} from "../redux/slice";
import "./AddToCart.css";
import { useNavigate } from "react-router-dom";

function AddToCart() {

  const navigate = useNavigate();

  const products = useSelector(
    (state) => state.cart.products
  );

  const dispatch = useDispatch();

  const total = products.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-container">

      <h1>My Cart</h1>

      <p className="cart-total">
        Total: ₹{Math.floor(total)}
      </p>

      {products.length > 0 ? (

        <button
          className="clear-cart"
          onClick={() => dispatch(clearItem())}
        >
          Clear Cart
        </button>

      ) : (

        <button
          className="add-products"
          onClick={() => navigate("/products")}
        >
          Add Products
        </button>

      )}

      {products.length === 0 ? (

        <p className="empty-cart">
          Your cart is empty
        </p>

      ) : (

        <div className="cart-list">

          {products.map((product) => (

            <div
              className="cart-item"
              key={product.id}
            >

              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <div className="cart-details">

                <h2>{product.title}</h2>

                <p>{product.category}</p>

                <h3>
                  ₹{product.price}
                </h3>

                <div className="quantity-box">

                  <button
                    className="quantity-btn"
                    onClick={() =>
                      dispatch(
                        increaseQuantity(product.id)
                      )
                    }
                  >
                    +
                  </button>

                  <span>
                    {product.quantity}
                  </span>

                  <button
                    className="quantity-btn"
                    onClick={() =>
                      dispatch(
                        decreaseQuantity(product.id)
                      )
                    }
                  >
                    -
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(removeItem(product.id))
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default AddToCart;