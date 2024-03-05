import React from "react";
// import "../assets/css/Products.css";
function Products() {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="products-container">
        <div className="product-card">
          {/* <img src="product1.jpg" alt="Product 1" /> */}
          <div className="product-info">
            <h3>Product 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="product-card">
          {/* <img src="product2.jpg" alt="Product 2" /> */}
          <div className="product-info">
            <h3>Product 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        {/* Add more product cards as needed */}
      </div>
    </div>
  );
}

export default Products;
