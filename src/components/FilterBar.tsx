import React from "react";

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
}) => (
  <div className="filter-bar">
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-bar"
    />
    <div className="category-tabs">
      {categories.map((cat) => (
        <div
          key={cat}
          className={`tab ${category === cat ? "active" : ""}`}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </div>
      ))}
    </div>
  </div>
);

export default FilterBar;