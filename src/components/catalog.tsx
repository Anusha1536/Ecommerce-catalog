import "../style/catalog.css";
import {ProductImg, CompanyImg} from "./productImg";

type CatalogProps = {
  name: string;
  price: number | string;
  desc: string;
  img: string;
};

function Catalog({ name, price, desc, img }: CatalogProps) {
  return (
    <div className="catalog-card">
      <ProductImg img={img} />
      <div>{name}</div>
      <div>{price}</div>
      <div>{desc}</div>
      <CompanyImg/>
    </div>
  );
}

export default Catalog;

