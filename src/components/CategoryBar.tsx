// src/components/CategoryBar.tsx
import React from "react";
import "./../style/CategoryBar.css";

const categories = [
  "All",
  "Phone",
  "Electronic",
  "Beauty Products",
  "Footwear",
  "Eyewear",
  "Accessories",
  "Home & Kitchen",
  "Books & Stationary",
  "Toys",
];

const CategoryBar = () => {
  return (
    <div className="category-bar">
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="category-list">
        {categories.map((cat, idx) => (
          <div className="category-item" key={idx}>
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
