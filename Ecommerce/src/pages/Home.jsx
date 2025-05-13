import { useDispatch } from "react-redux";
import Footer from "../Components/Footer";
import ProductGrid from "../Components/ProductGrid";
import { setSelectedCategory } from "../Features/products/ProductSlice";
import Banner from "../Components/banner";

const HomePage = () => {
  const categories = ["All", "Graphic Cards", "Macbook", "iMac", "Accessory"];
  const dispatch = useDispatch();
  return (
    <div>
      
      <div className="bg "></div>
      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4">
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => dispatch(setSelectedCategory(cat))}
                className="bg-gray-300 py-2 px-4 text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in"
              >
                {cat}
              </button>
            );
          })}
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
