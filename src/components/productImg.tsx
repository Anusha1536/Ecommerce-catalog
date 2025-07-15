type ProductImgProp = {
    img: string;
}

function ProductImg({img} : ProductImgProp) {
  return (
    <>
    <img src={img} alt="React Logo" className="product-img" />
    </>
  )
}

function CompanyImg(){
    return(
        <div>CompanyImg</div>
    )
}

export {ProductImg, CompanyImg };