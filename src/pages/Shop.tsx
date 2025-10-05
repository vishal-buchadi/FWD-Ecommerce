import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Shop = () => {
  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
        <p className="text-muted-foreground text-lg">
          Browse our complete range of premium products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
