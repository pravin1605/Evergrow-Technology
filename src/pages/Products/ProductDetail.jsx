import { useParams } from "react-router-dom";

import { products } from "../../data/products";

import ProductTemplate
  from "../../templates/ProductTemplate/ProductTemplate";

import NotFound
  from "../NotFound/NotFound";


function ProductDetail() {

  const { productSlug } = useParams();


  const product = products.find(
    (item) =>
      item.slug === productSlug
  );


  if (!product) {
    return <NotFound />;
  }

  return (
    <ProductTemplate
      product={product}
    />
  );
}


export default ProductDetail;