import { Link } from "react-router-dom";
import products from "../productsContent";

const ProductCart = ({ products }) => {
 
  return (
    <Link to={`/product/${products.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer">
        <img src={products.image} alt="" className="p-4"/>
        <div className="bg-gray-50 p-4">
          <h2 className="text-lg font-semibold my-4">
            {products.title.substring(0,25) + "..."}
          </h2>
          <p className="text-sm text-zinc-500 border-b-2 pb-4" >{products.description.substring(0,70) + "..."}</p>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-xl font-semibold">${products.price}</p>
            <p>View Details</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
