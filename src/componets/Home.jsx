import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MyStore</h1>

          <p>
            Discover amazing products at the best prices.
          </p>

        <Link to="/products">Shop Now</Link>
        </div>
      </section>

      <section className="home-content">

        <h2>Why Shop With Us?</h2>

        <div className="features">

          <div className="feature-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Get your products delivered quickly to your doorstep.</p>
          </div>

          <div className="feature-card">
            <h3>💰 Best Prices</h3>
            <p>Enjoy quality products at affordable prices.</p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure Payment</h3>
            <p>Your payments and personal information are secure.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;