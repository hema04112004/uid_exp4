// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import '../styles/ProductList.css'; // Import CSS

const products = [
  {
    id: 1,
    name: 'Rice',
    price: 60,
    image: require('../images/product1.jpeg'), // Use require
  },
  {
    id: 2,
    name: 'Dal',
    price: 55,
    image: require('../images/product2.jpeg'), // Use require
  },
  {
    id: 3,
    name: 'Salt',
    price: 20,
    image: require('../images/product3.jpg'), // Use require
  },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
