import "./../style/catalog.css"; // Assuming styling is here

// const categories = [
//   "All",
//   "Phone",
//   "Electronic",
//   "Beauty Products",
//   "Footwear",
//   "Eyewear",
//   "Accessories",
//   "Home & Kitchen",
//   "Books & Stationary",
//   "Toys",
// ];

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

      {/* Product Cards will go here */}
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <span>₹{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}