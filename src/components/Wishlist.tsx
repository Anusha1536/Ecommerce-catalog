import { Link, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: string;
  desc: string;
  img: string;
}

interface WishlistProps {
  products: Product[];
  wishlist: number[];
  toggleWishlist: (id: number) => void;
}

export default function Wishlist({ products, wishlist, toggleWishlist }: WishlistProps) {
  const likedProducts = products.filter((p) => wishlist.includes(p.id));
  const navigate = useNavigate();

  return (
    <div className="catalog-container">
      {/* Back button at the top */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: 16,
          padding: "8px 20px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: 600,
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Back
      </button>
      <h2 style={{ margin: "24px 0 16px 0" }}>My Wishlist</h2>
      {likedProducts.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="product-list">
          {likedProducts.map((product) => (
            <div className="product-card" key={product.id} style={{ position: "relative" }}>
              <span
                onClick={() => toggleWishlist(product.id)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 16,
                  fontSize: 24,
                  color: "#e63946",
                  cursor: "pointer",
                  userSelect: "none",
                  zIndex: 2,
                }}
                title="Remove from wishlist"
              >
                ♥
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
      )}
    </div>
  );
}