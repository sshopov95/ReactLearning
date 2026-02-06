import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  {
    /* sm за малък екран md за средем и без нищо за голям - първия div */
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
