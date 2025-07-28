import "./../style/catalog.css"; // Assuming styling is here
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: string;
  desc: string;
  img: string;
}

interface CatalogProps {
  products: Product[];
}

export default function Catalog({ products }: CatalogProps) {
  return (
    <div className="catalog-container">
      <div className={`product-list${products.length === 1 ? " single-item" : ""}`}>
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <span>₹{product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}