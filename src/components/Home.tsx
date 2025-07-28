import { useNavigate } from "react-router-dom";
import "../style/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>E-Commerce Product Catalog</h1>
        <button onClick={() => navigate("/catalog")}>Welcome</button>
      </div>
    </div>
  );
}

export default Home;
