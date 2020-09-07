import React from "react";
import Header from "../../Header";
import ProductPageContent from "./ProductPageContent";

const ProductPage: React.FC = () => {
  return (
    <div>
      <Header displayNav={true} />
      <ProductPageContent />
    </div>
  );
};

export default ProductPage;
