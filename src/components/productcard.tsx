// src/components/productcard.tsx
import React from "react";
import "./../style/catalog.css";

const ProductCard = ({ name, price, desc, img }: any) => {
  return (
    <div className="card">
      <img src={img} alt={name} className="card-image" />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <p>{desc}</p>
    </div>
  );
};

export default ProductCard;
