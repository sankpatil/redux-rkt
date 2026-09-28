import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

function Header() {

  const cartCount = useSelector((state) => state.cart.products.length);

  return (
    <header className="header">

      <div className="logo">
        MyStore
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <div className="cart">
        <Link to="/cart" className="cart-link">

          <span className="cart-icon">
            🛒

            <span className="cart-badge">
              {cartCount}
            </span>

          </span>

          Cart

        </Link>
      </div>

    </header>
  );
}

export default Header;