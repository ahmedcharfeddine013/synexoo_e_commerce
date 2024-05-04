import { product } from "@/types/product";
import ProductDisplay from "./Product";

export default function ProductsDisplay({ products }: { products: product[] }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {products.map((product) => (
          <ProductDisplay key={product.id} product={product} />
        ))}
      </div>
    );
  }