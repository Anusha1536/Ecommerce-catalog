import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div style={{ padding: 32 }}>Product not found.</div>;
  }

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", background: "#fff", borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: 32 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 24 }}>← Back</button>
      <div style={{ display: "flex", gap: 32 }}>
        <img
          src={product.img}
          alt={product.name}
          style={{ width: 300, height: 300, objectFit: "contain", background: "#f4f4f4", borderRadius: 12 }}
        />
        <div style={{ flex: 1 }}>
          <h2>{product.name}</h2>
          <div style={{ fontSize: 22, fontWeight: 600, margin: "8px 0" }}>₹{product.price}</div>
          <div style={{ margin: "8px 0" }}>
            <b>Rating:</b> {product.rating} ⭐
          </div>
          <div style={{ margin: "8px 0" }}>
            <b>Available Variants:</b>{" "}
            {product.variants && product.variants.length > 0
              ? product.variants.join(", ")
              : "N/A"}
          </div>
          <div style={{ margin: "16px 0" }}>
            <b>Specifications:</b>
            <ul style={{ margin: "8px 0 0 16px" }}>
              {product.specifications &&
                Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key}>
                    <b>{key}:</b> {value}
                  </li>
                ))}
            </ul>
          </div>
          <div style={{ margin: "16px 0" }}>
            <b>About This Product:</b>
            <ul style={{ margin: "8px 0 0 16px" }}>
              {product.about &&
                product.about.map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))}
            </ul>
          </div>
          <div style={{ margin: "8px 0" }}>
            <b>Category:</b> {product.category}
          </div>
          <div style={{ margin: "8px 0" }}>
            <b>Description:</b> {product.desc}
          </div>
        </div>
      </div>
    </div>
  );
}