import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  "Musical Instruments",
];

interface FilterBarProps {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (cat: string) => {
    onCategoryChange(cat);
    if (location.pathname !== "/catalog") {
      navigate("/catalog");
    }
  };

  return (
    <div className="filter-bar">
      <div className="search-bar">
        <span className="search-icon" aria-label="search">
          {/* Simple magnifier SVG */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#1976d2" strokeWidth="2" />
            <line
              x1="16"
              y1="16"
              x2="21"
              y2="21"
              stroke="#1976d2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="category-tabs">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`tab ${category === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;