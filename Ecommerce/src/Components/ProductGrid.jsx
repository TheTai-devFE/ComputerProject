import { useSelector } from "react-redux";
import ProductCart from "./ProductCart";
const ProductGrid = () => {

  const Product = useSelector((state)=> state.product.filteredItems)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24">
        {Product.map(products =>{
            return(
                <ProductCart key={products.id} products={products}/>
            )
        })}
    </div>
  );
};

export default ProductGrid;
