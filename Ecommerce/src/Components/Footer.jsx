import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "/assets/images-removebg-preview.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-4xl font-bold text-white">
              Subcribe Our Newsletter
            </h2>
            <form className="md:w-1/3 w-full mt-8 md:mt-0 relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-4 px-4 w-full rounded shadow-md"
              />
              <button className="bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div>
              <img src={logo} alt="" className="my-4" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                molestiae tempora sint obcaecati ducimus quo?
              </p>
              <div className="flex items-center py-4 gap-8">
                <Facebook
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
                <Twitter
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
                <Youtube
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
                <Instagram
                  size={40}
                  className="bg-white text-black rounded-md p-2"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Pages</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Categories</h2>
              <ul>
                <li>
                  <Link to="/">Graphics Card</Link>
                </li>
                <li>
                  <Link to="/">Macbook</Link>
                </li>
                <li>
                  <Link to="/">IMac</Link>
                </li>
                <li>
                  <Link to="/">Accessory</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Categories</h2>
              <p>
                70 Washington Square South, New York, My 10012, United States
              </p>
              <p>+12345 678 910</p>
              <p>+12345 678 109</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center "><p className="text-white">Copyright &copy; ThetaiDev 2025  </p></div>
    </footer>
  );
};

export default Footer;
