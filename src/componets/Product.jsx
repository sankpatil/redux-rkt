
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { addItem, removeItem } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

function Product() {

  // const [products, setProducts] = useState([]);
const dispatch=useDispatch()
  useEffect(() => {

    // axios
    //   .get("https://dummyjson.com/products?limit=12")
    //   .then((response) => {
    //     setProducts(response.data.products);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    dispatch(fetchProducts())

  }, []);
const products=useSelector((state)=>state.products.product)
console.log(products);
const cartProducts=useSelector((state)=>state.cart.products)

  return (
    <div className="product-container">

      <h1>Our Products</h1>

      <div className="product-grid">

        {products.map((product) => {
  const isInCart = cartProducts.some(
            (item) => item.id === product.id
          );
          return(
          <div className="product-card" key={product.id}>
  

            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />

            <div className="product-info">

              <h2>{product.title}</h2>

              <p className="product-category">
                {product.category}
              </p>

              <p className="product-description">
                {product.description}
              </p>

              <div className="product-bottom">

                <span className="product-price">
                Rs.{product.price}
                </span>

               

                {
                  isInCart?

                     <button  onClick={()=>dispatch(removeItem(product.id))}     style={{backgroundColor:"red"}} className="add-cart">
                  Remove
                </button>:<button  onClick={()=>dispatch(addItem(product))}     className="add-cart">
                  AddCart
                </button>
                }

              </div>

            </div>

          </div>
          )

})}

      </div>

    </div>
  );
}

export default Product;

