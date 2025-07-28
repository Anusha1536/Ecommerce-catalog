import Catalog from "./components/catalog";
import { products } from "./data/products";
import "./style/catalog.css";

function App() {
  return (
    <div className="app-background">
      <div className="catalog-container">
        {products.map((product) => (
          <Catalog
            key={product.id}
            name={product.name}
            price={product.price}
            desc={product.desc}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
