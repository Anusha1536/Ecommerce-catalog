import { useState } from "react";
import Catalog from "./components/catalog";
import FilterBar from "./components/FilterBar";
import { products as allProducts } from "./data/products";
import "./style/catalog.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app-background">
      <FilterBar
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />
      <div className="catalog-container">
        <Catalog products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;