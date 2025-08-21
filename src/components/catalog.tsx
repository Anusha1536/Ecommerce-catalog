import "./../style/catalog.css";
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
  wishlist: number[];
  toggleWishlist: (id: number) => void;
}

export default function Catalog({ products, wishlist, toggleWishlist }: CatalogProps) {
  return (
    <div className="catalog-container">
      <div className={`product-list${products.length === 1 ? " single-item" : ""}`}>
        {products.map((product) => (
          <div className="product-card" key={product.id} style={{ position: "relative" }}>
            {/* Heart icon at top-right */}
            <span
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product.id);
              }}
              style={{
                position: "absolute",
                top: 12,
                right: 16,
                fontSize: 24,
                color: wishlist.includes(product.id) ? "#e63946" : "#bbb",
                cursor: "pointer",
                userSelect: "none",
                zIndex: 2,
              }}
              title={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
            >
              {wishlist.includes(product.id) ? "♥" : "♡"}
            </span>
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <span>₹{product.price}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}