import { useState } from "react";
import "./../style/catalog.css"; // Assuming styling is here

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

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="catalog-container">
      {/* Search Input */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Horizontal Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`tab ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Product Cards will go here */}
      <div className="product-list">{/* ... */}</div>
    </div>
  );
}
